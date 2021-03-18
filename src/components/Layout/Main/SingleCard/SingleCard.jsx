import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleCard.css';
const SingleCard = ({ currentCard }) => {
    return (
        <NavLink to="/character" className="singleCard">
            <img src={currentCard.image} alt="avatar" />
            <div className="singleCard__info">
                <div className="singleCard___info__container">
                    Name:
                    <div className="singleCard__info__name">{currentCard.name}</div>
                </div>
                <div className="singleCard___info__container">
                    Status:
                    <div className="singleCard__info__name">
                        {currentCard.status}
                    </div>
                </div>
                <div className="singleCard___info__container">
                    Species:
                    <div className="singleCard__info__name">
                        {currentCard.species}
                    </div>
                </div>
                <div className="singleCard___info__container">
                    Gender:
                    <div className="singleCard__info__name">
                        {currentCard.gender}
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default SingleCard;
