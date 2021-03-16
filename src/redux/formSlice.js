import { createSlice } from '@reduxjs/toolkit';
export const formSlice = createSlice({
    name: 'form',
    initialState: {
        filter: null,
    },
    reducers: {
        loadCards: (state, action) => {
            return {
                ...state,
                cardsData: action.payload.results,
                pages: action.payload.info.pages,
            };
        },
    },
});

export const { loadCards } = formSlice.actions;
export default formSlice.reducer;
