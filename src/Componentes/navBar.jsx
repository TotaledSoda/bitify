import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gradient-to-r p-6 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-extrabold tracking-widest">
                    <span className="hover:text-cyan-500 transition duration-300 transform hover:scale-110">
                        Bitify
                    </span>
                </div>
                <ul className="flex space-x-8">
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:text-cyan-500 transition duration-300 text-lg transform hover:scale-110"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/About"
                            className="text-white hover:text-cyan-500 transition duration-300 text-lg transform hover:scale-110"
                        >
                            Acerca de
                        </Link>
                    </li>
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-white hover:text-cyan-500 transition duration-300 text-lg focus:outline-none transform hover:scale-110"
                        >
                            Servicios
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute bg-gray-800 text-white mt-2 py-2 w-48 rounded-lg shadow-xl border border-cyan-500 z-10">
                                <li className="px-4 py-2 hover:bg-cyan-500 hover:text-gray-900 transition duration-300 transform hover:scale-105">
                                    <Link to="/DesarrolloWeb">Desarrollo Web</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-cyan-500 hover:text-gray-900 transition duration-300 transform hover:scale-105">
                                    <Link to="/">Desarrollo de Apps</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-cyan-500 hover:text-gray-900 transition duration-300 transform hover:scale-105">
                                    <Link to="/">Servicios SEO</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/Contacto"
                            className="text-white hover:text-cyan-500 transition duration-300 text-lg transform hover:scale-110"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
                <button className="bg-cyan-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-110 shadow-lg">
                    Comenzar
                </button>
            </div>
        </nav>
    );
};

export default NavBar;