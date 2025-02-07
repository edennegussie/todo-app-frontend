import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
    const navigate = useNavigate(); // Hook for navigation
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-semibold text-xl">ToDo App</div>

                {isAuthenticated ? (
                    <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Logiiiin
                    </button>
                )}
                {/* {isAuthenticated && (
                    <div className="p-4 bg-gray-100 rounded shadow-md max-w-sm mx-auto">
                        <h2 className="text-xl font-bold mb-2">User Profile</h2>
                        <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                )} */}
            </div>
        </nav>
    );
};

export default NavBar;