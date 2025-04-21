import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCheckedStates,
    selectHasVoted,
    selectVotePolls,
    voteForOption,
} from '../../redux/reducers/votePollsSlice';
import ProgressBarAfterVote from './ProgressBarAfterVote';
import SocialShare from './SocialShare';

export default function Option() {
    const dispatch = useDispatch();
    const votePolls = useSelector(selectVotePolls);
    const hasVoted = useSelector(selectHasVoted);
    const checkedStates = useSelector(selectCheckedStates);

    const poll = votePolls[0];
    if (!poll) return null;

    const getProgressBarColor = (index) => {
        const colors = [
            'bg-dark',
            'bg-primary',
            'bg-orange-500',
            'bg-indigo-600',
        ];
        return colors[index % colors.length];
    };

    const getPercentageColor = (index) => {
        const colors = [
            'text-dark',
            'text-primary',
            'text-orange-500',
            'text-indigo-600',
        ];
        return colors[index % colors.length];
    };

    const handleCheckboxChange = (optionId) => {
        dispatch(voteForOption({ pollId: poll.question_id, optionId }));
        console.log('optionId: ', optionId);
    };

    // Limit to the first 4 options for display
    const displayedOptions = poll.options;

    // Calculate total votes for the displayed options only
    const totalVotes = displayedOptions.reduce(
        (sum, option) => sum + (option.vote || 0),
        0
    );

    // Normalize percentages for the displayed options
    const normalizedOptions = displayedOptions.map((option) => ({
        ...option,
        percentage:
            totalVotes > 0
                ? ((option.vote / totalVotes) * 100).toFixed(2)
                : '0.00',
    }));

    const isAnyChecked = checkedStates?.includes(true);

    return (
        <div className='bg-white'>
            {/* Poll Options */}
            <div className='space-y-3 border-b h-72 content-center'>
                {normalizedOptions.slice(0, 4).map((option, index) => (
                    <div
                        key={option.option_id}
                        className='flex items-center space-x-3'
                    >
                        <div className='flex items-center space-x-2'>
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    id={`checkbox-${option.option_id}`}
                                    className='peer appearance-none w-4 h-4 sm:h-7 sm:w-8 border-2 border-gray-400 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none'
                                    checked={
                                        checkedStates
                                            ? checkedStates[index]
                                            : false
                                    }
                                    onChange={() =>
                                        handleCheckboxChange(option.option_id)
                                    }
                                />
                                <FaCheckCircle className='absolute text-dark text-xs sm:text-lg top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100' />
                            </div>
                        </div>

                        {isAnyChecked && hasVoted ? (
                            <ProgressBarAfterVote
                                stats={option.title}
                                completedPercentage={`${option.percentage}%`}
                                styles={{
                                    transition: 'width 0.3s ease-in-out',
                                }}
                                percentageColor={`text-sm my-1 ${getPercentageColor(
                                    index
                                )}`}
                                progressbarColor={`text-sm my-0.5 ${getProgressBarColor(
                                    index
                                )}`}
                            />
                        ) : (
                            <div>
                                <label className='text-gray-700 text-xs sm:text-base lg:text-lg'>
                                    {option.title}
                                </label>
                                <h6
                                    className={`text-sm my-1 ${
                                        index % 2 === 0
                                            ? 'text-dark'
                                            : 'text-primary'
                                    }`}
                                >
                                    {option.percentage}% of votes
                                </h6>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Share Section */}
            <div className='mt-4 xl:mt-8 text-center'>
                <SocialShare />
            </div>
        </div>
    );
}
