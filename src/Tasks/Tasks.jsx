import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import axios from "axios";
import TaskItem from "./TaskItem";
import { FaAdd, FaEdit, FaPlus, FaSearch, FaTrashAlt } from 'react-icons/fa';
import NewTask from './NewTask';
import Alert from './Alert';
import { useState } from "react";


const fetchData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/tasks`);
    return response.data;
};

export default function Tasks() {
    const [alert, setAlert] = useState(null);
    const [filter, setFilter] = useState("");

    const { data, isLoading, error } = useQuery({
        queryKey: ["tasks"],
        queryFn: fetchData,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const showAlert = (message, type) => {
        console.log("alert");
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 1500);
    };

    const filteredTasks = data.filter((task) =>
        task.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>

            <div className="flex justify-between items-start w-full px-4  mb-7 align-top ">
                <div className="flex items-center space-x-3 ml-20 rounded-lg hover:bg-gray-200 focus:outline-none px-4 py-2" >
                    <NewTask onSave={showAlert} />
                </div>
                <div>
                    {alert && <Alert message={"Task saved successfully!"} type={"success"} onClose={() => setAlert(null)} />}
                </div>
                <div className="flex items-center space-x-3 mr-20">
                    <FaSearch className="cursor-pointer text-gray-800 text-2xl" />
                    <input
                        type="text"
                        placeholder="Search title..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
            </div>
            <hr />
            <h2 className="ml-20 mt-7 text-3xl">My Tasks</h2>
            <div className="flex flex-wrap justify-evenly gap-4 p-4 m-8 mt-2 pt-2">
                {
                    filteredTasks?.map((d) => {
                        return <TaskItem key={d.id} task={d} />
                    })
                }
            </div>
        </div>)
}
