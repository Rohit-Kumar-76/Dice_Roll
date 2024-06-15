import React, { useEffect } from 'react';

const Alert = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 1000); // Automatically close after 1 second
        return () => clearTimeout(timer); // Clear the timer if the component is unmounted
    }, [onClose]);

    const alertStyles = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
    };

    return (
        <div className={`fixed top-5 left-50 px-4 py-2 rounded shadow-md ${alertStyles[type]} transition-opacity duration-1000`}>
            <span>{message}</span>
        </div>
    );
};

export default Alert;
