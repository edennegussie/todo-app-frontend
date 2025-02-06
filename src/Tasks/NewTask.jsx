import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { FaPlus } from 'react-icons/fa';

const NewTask = () => {
    const [showForm, setShowForm] = useState(false);

    // const handleInputChange = (e) => {
    //     setTask(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add logic to handle the new task submission
    //     console.log('New Task:', task);
    //     setTask('');
    // };

    const onShowForm = () => {
        setShowForm(true);
    };

    const cancelFormHandler = () => {
        console.log("cancelled");

        setShowForm(false);

    };

    const saveFormHandler = (enteredData) => {
        console.log("saved");
        setShowForm(false);
    };

    return (
        <div>
            {showForm && <TaskForm onCancelForm={cancelFormHandler} onSaveForm={saveFormHandler} />}
            {!showForm && <span className="flex cursor-pointer " onClick={onShowForm}>
                <FaPlus className="text-gray-800 text-2xl" />
                <span className="ml-1">Create A New Task</span></span>}
        </div>
    );
};

export default NewTask;