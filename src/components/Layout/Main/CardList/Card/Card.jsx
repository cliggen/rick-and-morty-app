import React from 'react';
import './Card.css';
import CardHeader from './CardHeader/CardHeader';
import CardImage from './CardImage/CardImage';
import withPreloader from '../../../../../hoc/withPreloader';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSingleCard } from '../../../../../redux/cardsSlice';
import { CHARACTERURL } from '../../../../../api/urls';
import { fetchData } from '../../../../../api/utils';

const Card = ({ cardData: { name, image, id } }) => {
    const dispatch = useDispatch();
    const dispatchSingleCard = (item) => {
        dispatch(getSingleCard(item));
    };
    const getCharacter = () => {
        fetchData(`${CHARACTERURL}${id}`, dispatchSingleCard);
    };
    return (
        <NavLink to={`/character/${id}`} className="card" onClick={getCharacter}>
            <CardHeader title={name} />
            <CardImage image={image} />
        </NavLink>
    );
};

export default withPreloader(Card);
