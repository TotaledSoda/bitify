import React from "react";

const About = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Sobre Nosotros</h2>
                    <p className="mt-4 text-gray-600">
                        Somos un equipo dedicado a ofrecer soluciones innovadoras y de alta calidad.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">Nuestra Misión</h3>
                        <p className="mt-4 text-gray-600">
                            Brindar servicios excepcionales que superen las expectativas de nuestros clientes.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">Nuestra Visión</h3>
                        <p className="mt-4 text-gray-600">
                            Ser líderes en el mercado a través de la innovación y la excelencia.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">Nuestros Valores</h3>
                        <p className="mt-4 text-gray-600">
                            Compromiso, integridad y pasión por lo que hacemos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;