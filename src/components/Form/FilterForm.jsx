import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SearchFormUI = ({ handleSubmit }) => {
    return (
        <form className="search" onSubmit={handleSubmit}>
            <Field className="search__child" name="status" component="select">
                <option>Status</option>
                <option value="dead">Dead</option>
                <option value="alive">Alive</option>
                <option value="unknown">Unknown</option>
            </Field>
            <Field
                className="search__child"
                name="gender"
                component="select"
                placeholder="Name"
            >
                <option>Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </Field>
            <Field
                className="search__child"
                name="name"
                component="input"
                placeholder="Name"
            />
            <Field
                className="search__child"
                name="species"
                component="input"
                placeholder="Species"
            />
            <Field
                className="search__child"
                name="type"
                component="input"
                placeholder="Type"
            />
            <button className="search__child" type="submit">
                Find!
            </button>
        </form>
    );
};
export const SearchForm = reduxForm({
    form: 'SearchForm',
})(SearchFormUI);
