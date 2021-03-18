import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { filterCards } from '../../../redux/cardsSlice';
import { SearchForm } from '../../Form/FilterForm';
import { fetchFilteredCards } from '../../../api/utils';
import { useDispatch } from 'react-redux';
import { APIURL } from '../../../api/urls';

const Header = () => {
    const dispatch = useDispatch();
    const handle = (item) => {
        dispatch(filterCards(item));
    };
    const submit = (values) => {
        const queryParams = Object.keys(values).reduce(
            (accumulator, key) => accumulator + `${key}=${values[key]}&`,
            'character/?'
        );

        fetchFilteredCards(`${APIURL}${queryParams}`, handle);
    };
    return (
        <div className="header">
            <div className="header__slogan"> Rick & Morty Application</div>
            <nav className="header__navigation">
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
                <SearchForm onSubmit={submit} />
            </nav>
        </div>
    );
};

export default Header;
