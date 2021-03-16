import React from 'react';
import CardList from './CardList/CardList';
import { Switch, Route } from 'react-router-dom';
import SingleCard from './SingleCard/SingleCard';
import { connect } from 'react-redux';
import { getSingleCard, filterCards } from '../../../redux/cardsSlice';
import './Main.css';
class Main extends React.Component {
    render() {
        const { currentCard } = this.props;
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
                        render={() => (
                            <CardList
                                cards={this.props.cards}
                                getSingleCard={this.props.getSingleCard}
                            />
                        )}
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
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards.cardsData,
        currentCard: state.cards.currentCard,
    };
};
const mapStateToDispatch = { getSingleCard, filterCards };
export default connect(mapStateToProps, mapStateToDispatch)(Main);
