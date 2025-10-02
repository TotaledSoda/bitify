import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen    to-black flex items-center justify-center">
            <div className="text-center text-white p-8 rounded-lg shadow-lg bg-opacity-80 bg-gray-800 transform transition duration-500 hover:scale-105">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
                    ¡Bienvenido a Bitify!
                </h1>
                <p className="text-lg md:text-xl mb-6 opacity-80 hover:opacity-100 transition duration-300">
                    Explora el mundo de las criptomonedas con nosotros. Aprende, invierte y crece.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110">
                    Comenzar Ahora
                </button>
            </div>
        </div>
    );
};

export default Dashboard;