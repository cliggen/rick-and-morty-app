import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { loadCards } from '../redux/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../api/utils';
import { PAGEURL } from '../api/urls';
const App = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.cards.currentPage);

    useEffect(() => {
        const dispatchLoadCards = (item) => {
            dispatch(loadCards(item));
        };
        fetchData(`${PAGEURL}${currentPage}`, dispatchLoadCards);
    }, [currentPage, dispatch]);

    return (
        <div className="App">
            <Layout />
        </div>
    );
};

export default App;
