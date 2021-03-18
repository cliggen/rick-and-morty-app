import React from 'react';
import Card from './Card/Card';
import Paginator from '../../../Paginator/Paginator';
import './CardList.css';

const CardList = (props) => {
    const { cards } = props;
    return (
        <div className="CardList">
            {cards.map((card) => (
                <Card cardData={card} key={card.id} />
            ))}
            <Paginator />
        </div>
    );
};

export default CardList;
