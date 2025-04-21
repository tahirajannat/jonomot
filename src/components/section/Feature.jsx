import { React, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectVotePolls,
    updateVotePolls,
} from '../../redux/reducers/votePollsSlice';
import ProgressBarAfterVote from '../common/ProgressBarAfterVote';

export default function Feature() {
    const dispatch = useDispatch();
    const votePolls = useSelector(selectVotePolls);

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

    useEffect(() => {
        fetch('http://jonomot.nisalman.com/api/questions')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.success && Array.isArray(data.data)) {
                    const formattedPolls = data.data.map((poll) => ({
                        question_id: poll.question_id,
                        title: poll.title,
                        subtitle: poll.subtitle,
                        result: poll.result,
                        comment: poll.comment,
                        details: poll.details,
                        options: poll.options.map((opt) => ({
                            option_id: opt.option_id,
                            title: opt.title,
                            vote: opt.vote || 0,
                        })),
                    }));

                    dispatch(updateVotePolls(formattedPolls));
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching poll data:', error);
            });
    }, [dispatch]);

    const poll = votePolls[0];
    if (!poll) return null;

    // console.log('pollData', pollData);

    const handleVote = (optionId) => {
        setVoteCounts((prevCounts) => ({
            ...prevCounts,
            [optionId]: prevCounts[optionId] + 1,
        }));
        setTotalVotes((prevTotal) => prevTotal + 1);
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

    // const isAnyChecked = checkedStates?.includes(true);

    return (
        <div className='bg-secondary py-16 mt-32'>
            <div className=' container mx-auto px-4 sm:px-0'>
                <h2 className='text-2xl font-semibold mb-10 xl:mb-14 pb-2 inline-block border-b-2 border-indigo-500'>
                    সর্বশেষ ভোটিং স্ট্যাটস
                </h2>

                <div className='xl:grid xl:grid-cols-3 gap-6 '>
                    {votePolls.slice(0, 6).map((poll, index) => (
                        <div className='col-span-1 bg-white shadow-lg rounded-lg p-6 mb-6 xl:my-0'>
                            <h2 className='text-lg font-semibold border-b pb-2'>
                                {poll.title}
                            </h2>
                            {normalizedOptions
                                .slice(0, 4)
                                .map((option, index) => (
                                    <div className='flex items-center space-x-6 mb-4'>
                                        <div className='relative '>
                                            <input
                                                type='checkbox'
                                                // disabled={hasVoted}
                                                id={`checkbox-${option.option_id}`}
                                                className='peer appearance-none w-4 h-4 sm:h-7 sm:w-8 border-2 border-gray-400 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none'
                                                checked
                                                // checked={
                                                //     checkedStates
                                                //         ? checkedStates[index]
                                                //         : false
                                                // }
                                                // onChange={() =>
                                                //     handleCheckboxChange(
                                                //         option.option_id,
                                                //         index
                                                //     )
                                                // }
                                            />
                                            <FaCheckCircle className='absolute text-dark text-xs sm:text-lg top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100' />
                                        </div>
                                        <ProgressBarAfterVote
                                            stats={option.title}
                                            completedPercentage={`${option.percentage}%`}
                                            styles={{
                                                transition:
                                                    'width 0.3s ease-in-out',
                                            }}
                                            percentageColor={`text-sm ${getPercentageColor(
                                                index
                                            )}`}
                                            progressbarColor={`text-sm my-0.5 ${getProgressBarColor(
                                                index
                                            )}`}
                                        />
                                    </div>
                                ))}

                            {/* <ProgressBar
                                key={index}
                                stats={option.label}
                                completedPercentage={`${option.percentage}%`} // Convert back to string with % for display
                                index={index}
                                styles={{
                                    transition: 'width 0.3s ease-in-out',
                                }} // Optional custom style
                            /> */}
                        </div>
                    ))}

                    {/* ... */}

                    {/* <div className='col-span-1 bg-white p-6 shadow-lg rounded-lg mb-6 xl:my-0'>
                        <h2 className='text-lg font-semibold border-b pb-2'>
                            কে বেশি ভয়ানক?
                        </h2>
                        {normalizedOptions.map((option, index) => (
                            <ProgressBar
                                key={index}
                                stats={option.label}
                                completedPercentage={`${option.percentage}%`} // Convert back to string with % for display
                                index={index}
                                styles={{
                                    transition: 'width 0.3s ease-in-out',
                                }} // Optional custom style
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}
