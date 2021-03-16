import React from 'react';
import './Card.css';
import CardHeader from './CardHeader/CardHeader';
import CardImage from './CardImage/CardImage';
import withPreloader from '../../../../../hoc/withPreloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Card extends React.Component {
    render() {
        const { name, image, id } = this.props.cardData;
        return (
            <NavLink
                to={`/character/${id}`}
                className="Card"
                onClick={() => {
                    axios
                        .get(`https://rickandmortyapi.com/api/character/${id}`)
                        .then((x) => {
                            this.props.getSingleCard(x.data);
                        });
                }}
            >
                <CardHeader title={name} />
                <CardImage image={image} />
            </NavLink>
        );
    }
}

export default withPreloader(Card);
