import React from 'react';
import './CardImage.css';

class CardImage extends React.Component {
    render() {
        const { image } = this.props;
        return (
            <div className="CardImage">
                {image ? <img src={image} alt="card-preview" /> : null}
            </div>
        );
    }
}

export default CardImage;
