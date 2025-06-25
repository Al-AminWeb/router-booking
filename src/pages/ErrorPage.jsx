import React from 'react';
import {Link} from "react-router";
import Navbar from "../components/Navbar.jsx";

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 flex items-center justify-center px-4">

                <div className="text-white text-center max-w-xl">
                    <h1 className="text-[10rem] font-extrabold leading-none mb-4 tracking-tight">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Lost in space?</h2>
                    <p className="text-lg opacity-90 mb-6">
                        The page you’re looking for doesn’t exist. It might have been removed or never existed in the first place.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md transition duration-300 hover:bg-purple-100"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;
