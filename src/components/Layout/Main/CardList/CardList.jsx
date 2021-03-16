import React from 'react';
import Card from './Card/Card';
import Paginator from '../../../Paginator/Paginator';
import './CardList.css';

class CardList extends React.Component {
    render() {
        const { cards } = this.props;
        return (
            <div className="CardList">
                {cards.map((card) => (
                    <Card
                        cardData={card}
                        key={card.id}
                        getSingleCard={this.props.getSingleCard}
                        switchCardViewMode={this.props.switchCardViewMode}
                    />
                ))}
                <Paginator />
            </div>
        );
    }
}

export default CardList;
