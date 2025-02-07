import { useEffect } from "react";

const Alert = ({ message, type, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className={`min-w-96 max-w-96 justify-end items-center px-4 py-2 rounded-3xl text-white text-sm shadow-md transition-opacity duration-500 ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {message}
        </div>
    );
};

export default Alert;
