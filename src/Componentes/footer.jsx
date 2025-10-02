import React from 'react';

const footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Bitify. Todos los derechos reservados.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Política de Privacidad
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Términos de Servicio
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default footer;