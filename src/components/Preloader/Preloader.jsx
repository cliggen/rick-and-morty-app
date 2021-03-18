import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Preloader.css';
const Preloader = () => {
    return (
        <div className="Preloader">
            <ClipLoader size={150} color={'grey'} loading />
        </div>
    );
};
export default Preloader;
