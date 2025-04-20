import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ProgressBarAfterVote from './ProgressBarAfterVote';
import SocialShare from './SocialShare';

export default function Option() {
    const [pollOptions, setPollOptions] = useState([
        { label: 'যে দল ১৫ বছর ধরে খেয়ে গেল', votes: 5 },
        { label: 'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই', votes: 3 },
        { label: 'উভয়েই অনেক বেশি ভয়ানক', votes: 2 },
        { label: 'নতুন সরকার বেশি ভয়ানক হবে', votes: 1 },
    ]);

    const getProgressBarColor = (index) => {
        const colors = [
            'bg-dark',
            'bg-primary',
            'bg-orange-500',
            'bg-indigo-600',
        ];

        return colors[index % 4];
    };
    const getPercentageColor = (index) => {
        const percentageColors = [
            'text-dark',
            'text-primary',
            'text-orange-500',
            'text-indigo-600',
        ];
        return percentageColors[index % 4];
    };

    // State to track checked status for each option
    const [checkedStates, setCheckedStates] = useState(
        pollOptions.map(() => false)
    );

    const [hasVoted, setHasVoted] = useState(() => {
        return localStorage.getItem('hasVoted') === 'true';
    });

    const handleCheckboxChange = (index) => {
        if (checkedStates[index]) {
            return; // Do nothing if the option is already selected
        }
        const previousCheckedIndex = checkedStates.findIndex(
            (state) => state === true
        );
        const updatedOptions = [...pollOptions];

        if (previousCheckedIndex !== -1 && previousCheckedIndex !== index) {
            // Undo the previous vote
            updatedOptions[previousCheckedIndex].votes -= 1;
        }

        // Apply the new vote
        updatedOptions[index].votes += 1;

        // Update checked states (single selection)
        const newCheckedStates = checkedStates.map((_, i) => i === index);
        setCheckedStates(newCheckedStates);
        setPollOptions(updatedOptions);

        // Update voting status
        setHasVoted(true);
        localStorage.setItem('hasVoted', 'true');
    };

    // Calculate the total votes
    const totalVotes = pollOptions.reduce(
        (sum, option) => sum + option.votes,
        0
    );

    // Normalize percentages to sum to 100%
    const normalizedOptions = pollOptions.map((option) => ({
        ...option,
        percentage:
            totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(2) : 0,
    }));

    const isAnyChecked = checkedStates.includes(true);
    console.log('isAnyChecked', isAnyChecked);

    return (
        <div className='bg-white'>
            {/* Poll Options */}
            <div className='space-y-3 border-b py-6'>
                {normalizedOptions.map((option, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                        <div className='flex items-center space-x-2'>
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    id={`checkbox-${index}`}
                                    className='peer appearance-none w-4 h-4 sm:h-7 sm:w-8 border-2 border-gray-400 rounded bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none'
                                    checked={checkedStates[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                    readOnly
                                />
                                <FaCheckCircle className='absolute text-dark text-xs sm:text-lg top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100' />
                            </div>
                        </div>
                        {isAnyChecked && hasVoted ? (
                            <ProgressBarAfterVote
                                stats={option.label}
                                completedPercentage={`${option.percentage}%`}
                                styles={{
                                    transition: 'width 0.3s ease-in-out',
                                }}
                                percentageColor={`text-sm my-1 ${getPercentageColor(
                                    index
                                )}`}
                                progressbarColor={`text-sm my-1 ${getProgressBarColor(
                                    index
                                )}`}
                            />
                        ) : (
                            <div className=''>
                                <label className='text-gray-700 my-4 text-xs sm:text-base lg:text-lg'>
                                    {option.label}
                                </label>
                                <h6
                                    className={`text-sm my-1 ${
                                        index % 2 === 0
                                            ? 'text-red-500'
                                            : 'text-green-500'
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
