import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { filterCards } from '../../../redux/cardsSlice';
import FilterForm from '../../Form/FilterForm';
import { get } from '../../../api/utils';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const submit = (values) => {
        const queryParams = Object.keys(values).reduce(
            (accumulator, key) => accumulator + `${key}=${values[key]}&`,
            'character/?'
        );
        get(`https://rickandmortyapi.com/api/${queryParams}`).then((x) => {
            dispatch(filterCards(x.data.results));
        });
    };
    return (
        <div className="Header">
            <div className="Header__slogan"> Rick & Morty Application</div>
            <nav className="Header__navigation">
                <NavLink className="nav-link" activeClassName="selected" to="/">
                    Main Page
                </NavLink>
                <NavLink
                    className="nav-link"
                    activeClassName="selected"
                    to="/character"
                >
                    Characters
                </NavLink>
                <FilterForm onSubmit={submit} />
            </nav>
        </div>
    );
};

export default Header;
