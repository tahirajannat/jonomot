import { React, useEffect, useState } from 'react';
import ProgressBar from '../common/ProgressBar';

export default function Feature() {
    const pollOptions = [
        { label: 'যে দল ১৫ বছর ধরে খেয়ে গেল', percentage: 80 },
        { label: 'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই', percentage: 120 },
        { label: 'উভয়েই অনেক বেশি ভয়ানক', percentage: 80 },
        { label: 'নতুন সরকার বেশি ভয়ানক হবে ', percentage: 130 },
    ];

    const [voteCounts, setVoteCounts] = useState({});
    const [totalVotes, setTotalVotes] = useState(0);
    const [pollData, setPollData] = useState([]);
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
                    const polls = data.data;
                    setPollData(polls);
                    console.log('pollData', pollData);

                    // Initialize vote counts
                    const initialCounts = {};
                    let totalVoteCount = 0;

                    polls.forEach((poll) => {
                        if (
                            Array.isArray(poll.options) &&
                            poll.options.length > 0
                        ) {
                            poll.options.forEach((option) => {
                                initialCounts[option.option_id] =
                                    option.vote || 0;
                                totalVoteCount += option.vote || 0;
                            });
                        } else {
                            console.warn(
                                'No options array found for poll:',
                                poll
                            );
                        }
                    });

                    setVoteCounts(initialCounts);
                    setTotalVotes(totalVoteCount);
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error.message);
                console.error('Error details:', error);
            });
    }, []);

    // console.log('pollData', pollData);

    const handleVote = (optionId) => {
        setVoteCounts((prevCounts) => ({
            ...prevCounts,
            [optionId]: prevCounts[optionId] + 1,
        }));
        setTotalVotes((prevTotal) => prevTotal + 1);
    };

    // / Calculate the total percentage
    const totalPercentage = pollOptions.reduce(
        (sum, option) => sum + option.percentage,
        0
    );

    // Normalize percentages to sum to 100%
    const normalizedOptions = pollOptions.map((option) => {
        const normalizedPercentage =
            (option.percentage / totalPercentage) * 100;
        return {
            ...option,
            percentage: normalizedPercentage.toFixed(2), // Round to 2 decimal places
        };
    });
    return (
        <div className='bg-secondary py-16 mt-32'>
            <div className=' container mx-auto px-4 sm:px-0'>
                <h2 className='text-2xl font-semibold mb-10 xl:mb-14 pb-2 inline-block border-b-2 border-indigo-500'>
                    সর্বশেষ ভোটিং স্ট্যাটস
                </h2>

                <div className='xl:grid xl:grid-cols-3 gap-6 '>
                    <div className='col-span-1 bg-white shadow-lg rounded-lg p-6 mb-6 xl:my-0'>
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
                    </div>
                    {/* ... */}
                    <div className='col-span-1 bg-white p-6 shadow-lg rounded-lg mb-6 xl:my-0'>
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
                    </div>
                    {/* ... */}
                    <div className='col-span-1 bg-white p-6 shadow-lg rounded-lg mb-6 xl:my-0'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
