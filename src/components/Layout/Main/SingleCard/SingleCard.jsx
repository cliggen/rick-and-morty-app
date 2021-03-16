import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleCard.css';
class SingleCard extends React.Component {
    render() {
        const { currentCard } = this.props;
        return (
            <NavLink to="/character" className="SingleCard">
                <img src={currentCard.image} alt="avatar" />
                <div className="SingleCard__info">
                    <div className="SingleCard___info__container">
                        Name:
                        <div className="SingleCard__info__name">
                            {currentCard.name}
                        </div>
                    </div>
                    <div className="SingleCard___info__container">
                        Status:
                        <div className="SingleCard__info__name">
                            {currentCard.status}
                        </div>
                    </div>
                    <div className="SingleCard___info__container">
                        Species:
                        <div className="SingleCard__info__name">
                            {currentCard.species}
                        </div>
                    </div>
                    <div className="SingleCard___info__container">
                        Gender:
                        <div className="SingleCard__info__name">
                            {currentCard.gender}
                        </div>
                    </div>
                </div>
            </NavLink>
        );
    }
}

export default SingleCard;
