import React from "react";

const DesarrolloWeb = () => {
    return (
        <div className="min-h-screen text-white p-8 flex flex-col items-center justify-center space-y-8 bg-gradient-to-b   ">
            <h1 className="text-4xl font-extrabold tracking-widest text-cyan-400">
                Futuristic Store
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={`https://via.placeholder.com/300?text=Product+${index + 1}`}
                            alt={`Product ${index + 1}`}
                            className="rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-bold text-cyan-300">Product {index + 1}</h2>
                        <p className="text-gray-400 mt-2">
                            A futuristic product description goes here.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-cyan-500 text-gray-900 font-semibold rounded hover:bg-cyan-400 transition-colors duration-300">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesarrolloWeb;