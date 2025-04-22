import { React, useEffect, useState } from 'react';
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
    const [showAlert, setShowAlert] = useState(false);

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

    //     console.log('optionId: ', optionId);
    //     try {
    //         const response = await fetch(
    //             `http://jonomot.nisalman.com/api/options/${optionId}/vote`,
    //             {
    //                 method: 'PUT',
    //             }
    //         );

    //         if (!response.ok) {
    //             throw new Error('Failed to submit vote');
    //         }

    //         const result = await response.json();
    //         console.log('Vote submitted:', result);
    //     } catch (err) {
    //         console.error('Voting error:', err.message);
    //     }
    // };

    // Limit to the first 4 options for display
    // Restore saved vote from localStorage
    useEffect(() => {
        const savedVote = localStorage.getItem(`votedPoll_${poll.question_id}`);
        if (savedVote) {
            const { optionId } = JSON.parse(savedVote);
            dispatch(voteForOption({ pollId: poll.question_id, optionId }));
        }
    }, [dispatch, poll.question_id]);

    const handleCheckboxChange = async (optionId, index) => {
        const pollId = poll.question_id;
        const savedVote = JSON.parse(
            localStorage.getItem(`votedPoll_${pollId}`)
        );
        const previousOptionId = savedVote?.optionId;

        // skip the API call if user selects the same option again
        if (optionId === previousOptionId) {
            console.log('Same option selected again – skip');
            return;
        }

        // Update Redux state
        dispatch(voteForOption({ pollId, optionId }));

        try {
            // Send the "vote-up" for the new option
            const voteUpResponse = await fetch(
                `http://jonomot.nisalman.com/api/options/${optionId}/vote-up`,
                {
                    method: 'PUT',
                }
                // alert('আপনার মতামত গৃহীত হয়েছে')
            );
            // Check if the response was successful (status code 200)
            if (voteUpResponse.ok) {
                // Show success alert
                setShowAlert(true);

                // Automatically hide after 4 seconds
                setTimeout(() => {
                    setShowAlert(false);
                }, 4000);
            } else {
                // Handle error or failed response (optional)
                console.error('Failed to vote up');
            }
            if (!voteUpResponse.ok) {
                throw new Error('Failed to vote up');
            }
            if (previousOptionId) {
                const voteDownResponse = await fetch(
                    `http://jonomot.nisalman.com/api/options/${previousOptionId}/vote-down`,
                    {
                        method: 'PUT',
                    }
                );

                // Check if the vote-down request was successful
                if (!voteDownResponse.ok) {
                    throw new Error('Failed to vote down');
                }
            }

            // Save the new vote to localStorage
            localStorage.setItem(
                `votedPoll_${pollId}`,
                JSON.stringify({ optionId })
            );

            console.log('Vote successfully submitted and updated');
        } catch (err) {
            console.error('Error submitting vote:', err.message);
        }
    };

    const displayedOptions = poll.options;

    // Calculate total votes
    const totalVotes = displayedOptions.reduce(
        (sum, option) => sum + (option.vote || 0),
        0
    );

    // Normalize percentages
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
                                    // disabled={hasVoted}
                                    id={`checkbox-${option.option_id}`}
                                    className='peer appearance-none w-4 h-4 sm:h-7 sm:w-8 border-2 border-gray-400 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none'
                                    checked={
                                        checkedStates
                                            ? checkedStates[index]
                                            : false
                                    }
                                    onChange={() =>
                                        handleCheckboxChange(
                                            option.option_id,
                                            index
                                        )
                                    }
                                />
                                <FaCheckCircle className='absolute text-dark text-xs sm:text-lg top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100' />
                            </div>
                        </div>
                        {/* Custom Alert Box */}
                        {showAlert && (
                            <div className='absolute top-20 right-0 transform -translate-x-1/2 w-full max-w-sm p-4 bg-red-200 text-primary border-l-4 border-green-600 rounded-md shadow-lg mt-4'>
                                <div className='flex items-center'>
                                    <FaCheckCircle className='text-xl' />
                                    <p className='text-base font-semibold ml-4'>
                                        আপনার মতামত গৃহীত হয়েছে
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowAlert(false)}
                                    className='absolute top-1 right-4 text-dark hover:text-red-400'
                                >
                                    ×
                                </button>
                            </div>
                        )}

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
