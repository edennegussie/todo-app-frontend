import React from 'react';

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100 px-4">
            {/* Main Content Wrapper */}
            <div className="w-full max-w-4xl">
                {/* Heading on top */}
                <h1 className="text-5xl font-bold text-blue-900 mb-1 text-center">
                    Ready to conquer the day?
                </h1>

                <div className="flex mt-20" >
                    {/* Left Column */}
                    <div className="w-1/2 p-8 text-center">
                        <p className="text-xl text-gray-700 mb-6">
                            Every great journey begins with a single step. Let's make today amazing!
                        </p>
                        <p className="text-lg text-gray-500 mb-8">
                            Stay focused, stay determined, and success will follow.
                        </p>
                    </div>

                    {/* Vertical Line */}
                    <div className="border-l-2 border-gray-300"></div>

                    {/* Right Column */}
                    <div className="w-1/2 p-8 text-center">
                        <p className="text-md text-gray-600 mb-4">
                            To unlock your potential and start achieving your goals, please log in if you're a returning user.
                        </p>
                        <p className="text-md text-gray-600 mb-4">
                            New here? Sign up and create an account to begin your journey towards success!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
