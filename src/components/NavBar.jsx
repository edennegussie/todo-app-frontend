import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (<nav className="bg-gray-800 p-4 min-h-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-semibold text-xl">ToDo App</div>
                <div>Loading...</div>
            </div>
        </nav>);
    }

    return (
        <nav className="bg-gray-800 p-4 min-h-20 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-semibold text-xl">ToDo App</div>

                {isAuthenticated ? (
                    <span className='flex'>
                        <span className='text-right justify-center'> <p className='text-white text-sm'>{user.nickname}</p>
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
            </div>
        </nav>
    );
};

export default NavBar;