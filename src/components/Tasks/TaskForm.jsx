import { useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const postData = async (newData) => {
    const response = await axios.post(`${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/tasks`, newData);
    return response.data;
};

const TaskForm = ({ onCancelForm, onSaveForm }) => {
    const { user } = useAuth0();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
    });
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            // Invalidate and refetch data to update UI
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
        onError: (error) => {
            console.error("Error adding task:", error);
        }
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Submitted:", formData);
        // Add logic to handle form submission
        formData['status'] = "TODO";
        formData['userEmail'] = user.email;
        mutation.mutate(formData);
        onSaveForm();
    };

    const hideFormHandler = () => {
        onCancelForm();
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Title */}
            <h2 className="text-lg text-gray-700 mb-4">Add Task</h2>

            <div className="grid grid-cols-2 gap-4">
                {/* Title Field */}
                <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter task title"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Due Date Field */}
                <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>

            {/* Description Field (Full Width) */}
            <div className="mt-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter task description"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
                <FaTimes
                    onClick={hideFormHandler}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                />
                <button type="submit" className="cursor-pointer text-gray-500 hover:text-gray-700" ><FaSave /></button>

            </div>
        </form>
    );
};

export default TaskForm;
