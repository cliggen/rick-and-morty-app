import React from 'react';
import CardList from './CardList/CardList';
import { Switch, Route } from 'react-router-dom';
import SingleCard from './SingleCard/SingleCard';
import { useSelector } from 'react-redux';
import './Main.css';

const Main = () => {
    const currentCard = useSelector((state) => state.cards.currentCard);
    const cards = useSelector((state) => state.cards.cardsData);
    return (
        <div className="Main">
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => <div className="Main__background" />}
                />
                <Route
                    path="/character"
                    exact
                    render={() => <CardList cards={cards} />}
                />
                {currentCard !== null ? (
                    <Route
                        path="/character/:id"
                        exact
                        render={() => <SingleCard currentCard={currentCard} />}
                    />
                ) : null}
            </Switch>
        </div>
    );
};
export default Main;
