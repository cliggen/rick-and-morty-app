import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import { reducer as formReducer } from 'redux-form';

export default configureStore({
    reducer: {
        cards: cardsReducer,
        form: formReducer,
    },
});
