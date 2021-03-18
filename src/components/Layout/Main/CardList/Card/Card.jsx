import React from 'react';
import './Card.css';
import CardHeader from './CardHeader/CardHeader';
import CardImage from './CardImage/CardImage';
import withPreloader from '../../../../../hoc/withPreloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSingleCard } from '../../../../../redux/cardsSlice';

const Card = (props) => {
    const dispatch = useDispatch();
    const { name, image, id } = props.cardData;
    return (
        <NavLink
            to={`/character/${id}`}
            className="Card"
            onClick={() => {
                axios
                    .get(`https://rickandmortyapi.com/api/character/${id}`)
                    .then((x) => {
                        dispatch(getSingleCard(x.data));
                    });
            }}
        >
            <CardHeader title={name} />
            <CardImage image={image} />
        </NavLink>
    );
};

export default withPreloader(Card);
