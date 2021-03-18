import React from 'react';
import './CardImage.css';

const CardImage = (props) => {
    const { image } = props;
    return (
        <div className="CardImage">
            {image && <img src={image} alt="card-preview" />}
        </div>
    );
};

export default CardImage;
