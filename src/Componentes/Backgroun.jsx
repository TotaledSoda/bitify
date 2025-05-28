import React from "react";

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black flex items-center justify-center z-[-1] animate-gradient-x">
            <style>
                {`
                    @keyframes gradient-x {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-gradient-x {
                        background-size: 200% 200%;
                        animation: gradient-x 6s ease infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Background;