import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterCards } from '../../../redux/cardsSlice';
import FilterForm from '../../Form/FilterForm';
import { get } from '../../../api/utils';

class Header extends React.Component {
    submit = (values) => {
        const queryParams = Object.keys(values).reduce(
            (accumulator, key) => accumulator + `${key}=${values[key]}&`,
            'character/?'
        );
        get(`https://rickandmortyapi.com/api/${queryParams}`).then((x) => {
            this.props.filterCards(x.data.results);
        });
    };
    render() {
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
                    <FilterForm onSubmit={this.submit} />
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = { filterCards };

export default connect(null, mapDispatchToProps)(Header);
