// votePollsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    votePolls: [
        {
            question_id: 1,
            title: 'বাংলাদেশের জাতীয় ফুল কী?',
            subtitle: 'ফুল সম্পর্কে প্রশ্ন',
            result: 'পদ্মফুল',
            comment: 'পদ্মফুল বাংলাদেশের জাতীয় ফুল হিসেবে পরিচিত।',
            details:
                'পদ্মফুল বাংলাদেশের পুকুর এবং হাওড়-বাওড়ে প্রচুর পরিমাণে পাওয়া যায়।',
            options: [
                {
                    option_id: 1,
                    title: 'পদ্মফুল',
                    vote: 10,
                },
                {
                    option_id: 2,
                    title: 'গোলাপ',
                    vote: 5,
                },
                {
                    option_id: 3,
                    title: 'সাদা শাপলা',
                    vote: 8,
                },
                {
                    option_id: 4,
                    title: 'জবা ফুল',
                    vote: 2,
                },
                {
                    option_id: 25,
                    title: 'জবা',
                    vote: 10,
                },
            ],
        },
    ],
    hasVoted: false,
    checkedStates: null,
};

const votePollsSlice = createSlice({
    name: 'votePolls',
    initialState,
    reducers: {
        voteForOption(state, action) {
            const { pollId, optionId } = action.payload;
            const poll = state.votePolls.find((p) => p.question_id === pollId);
            if (!poll) return;

            if (!state.checkedStates) {
                state.checkedStates = poll.options.map(() => false);
            }

            const currentIndex = poll.options.findIndex(
                (o) => o.option_id === optionId
            );
            const isAlreadySelected = state.checkedStates[currentIndex];

            // Unselect
            if (isAlreadySelected) {
                poll.options[currentIndex].vote -= 1;
                state.checkedStates[currentIndex] = false;
                state.hasVoted = false;
                return;
            }

            // Deselect previous
            const previousIndex = state.checkedStates.findIndex(
                (v) => v === true
            );
            if (previousIndex !== -1) {
                poll.options[previousIndex].vote -= 1;
            }

            // Select new
            poll.options[currentIndex].vote += 1;

            // Update selection state
            state.checkedStates = state.checkedStates.map(
                (_, i) => i === currentIndex
            );
            state.hasVoted = true;
        },

        updateVotePolls(state, action) {
            state.votePolls = action.payload;
            state.checkedStates = null;
            state.hasVoted = false;
        },
    },
});

export const selectVotePolls = (state) => state.votePolls.votePolls;
export const selectHasVoted = (state) => state.votePolls.hasVoted;
export const selectCheckedStates = (state) => state.votePolls.checkedStates;

export const { voteForOption, updateVotePolls } = votePollsSlice.actions;
export default votePollsSlice.reducer;
