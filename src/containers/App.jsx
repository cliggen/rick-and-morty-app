import React from 'react';
import Layout from '../components/Layout/Layout';
import { loadCards } from '../redux/cardsSlice';
import { connect } from 'react-redux';
import { get } from '../api/utils';
class App extends React.Component {
    componentDidMount() {
        get(
            `https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}`
        ).then((x) => {
            this.props.loadCards(x.data);
        });
    }

    render() {
        return (
            <div className="App">
                <Layout />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentPage: state.cards.currentPage,
        currentMode: state.cards.currentMode,
    };
};
const mapDispatchToProps = { loadCards };
export default connect(mapStateToProps, mapDispatchToProps)(App);
