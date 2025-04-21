import React, { useEffect, useState } from 'react';
import Feature from '../section/Feature';
import Hero from '../section/Hero';

export default function Home() {
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
        <>
            <Hero />
            {/* <Feature /> */}
            {/* <Record /> */}
            {/* <div className='container mx-auto xl:grid xl:grid-cols-12 gap-6 py-20 px-10 xl:px-0 '>
                <div className='xl:col-span-7 mb-10 xl:mb-0'>
                    <PollCard
                        pollData={pollData}
                        voteCounts={voteCounts}
                        totalVotes={totalVotes}
                        onVote={handleVote}
                    />{' '}
                </div>
                <div className='xl:col-span-5'>
                    <Stats
                        voteCounts={voteCounts}
                        totalVotes={totalVotes}
                        pollData={pollData}
                    />
                </div>
            </div> */}
            <Feature />
        </>
    );
}
