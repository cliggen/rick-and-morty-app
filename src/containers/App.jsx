import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { loadCards } from '../redux/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../api/utils';
const App = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.cards.currentPage);
    useEffect(() => {
        get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`).then(
            (x) => {
                dispatch(loadCards(x.data));
            }
        );
    }, [currentPage, dispatch]);

    return (
        <div className="App">
            <Layout />
        </div>
    );
};

export default App;
