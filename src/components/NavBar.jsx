import React from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-semibold text-xl">ToDo App</div>
                <button onClick={() => navigate("/signup")} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Register
                </button>
                <button onClick={() => navigate("/login")} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Login
                </button>
                <button onClick={() => navigate("/login")} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default NavBar;