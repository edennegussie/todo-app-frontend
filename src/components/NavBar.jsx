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
                    <span className='flex'>
                        <span className='text-right justify-center'> <p className='text-white text-sm'>{user.name}</p>
                            <p className='text-white text-sm'>{user.email}</p>
                        </span>
                        <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full mb-2 mr-10" />

                        <button
                            onClick={() => logout({ returnTo: window.location.origin })}
                            className="justify-center bg-gray-600 text-white p-2 rounded-full hover:bg-red-700 w-16 h-10 text-sm"
                        >Logout
                        </button>
                    </span>
                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className="justify-center bg-green-700 text-white p-2 rounded-lg hover:bg-green-900 w-16 h-10 text-sm"
                    >
                        Login
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