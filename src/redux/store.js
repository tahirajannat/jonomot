// store.js
import { configureStore } from '@reduxjs/toolkit';
import votePollsReducer from './reducers/votePollsSlice'; // Adjust the import path if necessary

export const store = configureStore({
    reducer: {
        votePolls: votePollsReducer, // Ensure this key matches your slice name
    },
});
