import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cardsData',
    initialState: {
        cardsData: [],
        pages: 0,
        currentPage: 1,
        currentCard: null,
    },
    reducers: {
        loadCards: (state, action) => {
            return {
                ...state,
                cardsData: action.payload.results,
                pages: action.payload.info.pages,
            };
        },
        loadPage: (state, action) => {
            return {
                ...state,
                cardsData: action.payload.results,
            };
        },
        switchPage: (state, action) => {
            return {
                ...state,
                currentPage: action.payload,
            };
        },
        getSingleCard: (state, action) => {
            return {
                ...state,
                currentCard: action.payload,
            };
        },
        filterCards: (state, action) => {
            return {
                ...state,
                cardsData: action.payload,
            };
        },
    },
});

export const {
    loadCards,
    switchPage,
    getSingleCard,
    filterCards,
    loadPage,
} = cardsSlice.actions;
export default cardsSlice.reducer;
