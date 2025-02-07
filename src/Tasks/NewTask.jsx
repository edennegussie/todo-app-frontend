import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { FaPlus } from 'react-icons/fa';

const NewTask = ({ onSave }) => {
    const [showForm, setShowForm] = useState(false);

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
        onSave();
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