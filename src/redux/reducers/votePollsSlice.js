// votePollsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    votePolls: [
        {
            id: 1,
            poll_title: 'কে বেশি ভয়ানক?',
            poll_options: [
                { id: 0, option: 'যে দল ১৫ বছর ধরে খেয়ে গেলো', percentage: 0 },
                {
                    id: 1,
                    option: 'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই',
                    percentage: 60,
                },
                { id: 2, option: 'উভয়েই অনেক বেশি ভয়ানক', percentage: 90 },
                {
                    id: 3,
                    option: 'নতুন সরকার বেশি ভয়ানক হবে',
                    percentage: 100,
                },
            ],
        },
    ],
};

const votePollsSlice = createSlice({
    name: 'votePolls',
    initialState,
    reducers: {
        updateVotePolls(state, action) {
            state.votePolls = action.payload; // Update the `votePolls` in the state
        },
        updateVotePercentages(state, action) {
            const { pollId, optionId, percentage } = action.payload;
            const poll = state.polls.find((p) => p.id === pollId);
            if (poll) {
                const option = poll.poll_options.find((o) => o.id === optionId);
                if (option) {
                    option.percentage = percentage;
                }
            }
        },
    },
});

export const selectVotePolls = (state) => state.votePolls; // Ensure this matches the state shape

export const { updateVotePolls, updateVotePercentages } =
    votePollsSlice.actions;
export default votePollsSlice.reducer;
