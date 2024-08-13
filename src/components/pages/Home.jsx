import React, { useEffect, useState } from 'react';
import PollCard from '../PollCard';
import Stats from '../Stats';
import ProgressBar from '../common/ProgressBar';

export default function Home() {
    const [voteCounts, setVoteCounts] = useState({});
    const [totalVotes, setTotalVotes] = useState(0);
    const [pollData, setPollData] = useState([]);
    useEffect(() => {
        fetch('http://jonomot.nisalman.com/api/questions')
            .then((response) => response.json())
            .then((data) => {
                if (data.success && Array.isArray(data.data)) {
                    const polls = data.data;
                    setPollData(polls);

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
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleVote = (optionId) => {
        setVoteCounts((prevCounts) => ({
            ...prevCounts,
            [optionId]: prevCounts[optionId] + 1,
        }));
        setTotalVotes((prevTotal) => prevTotal + 1);
    };
    return (
        <>
            <div className='container mx-auto xl:grid xl:grid-cols-12 gap-6 py-20 px-10 xl:px-0 '>
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
            </div>
            <div className='bg-white py-12 xl:py-32 px-8 xl:px-0'>
                <div className=' container mx-auto'>
                    <h2 className='text-2xl font-semibold mb-10 xl:mb-14 pb-2 inline-block border-b-2 border-indigo-500'>
                        সর্বশেষ ভোটিং স্ট্যাটস
                    </h2>

                    <div className='xl:grid xl:grid-cols-3 gap-6 '>
                        <div className='col-span-1 bg-gray-100 p-6 rounded-lg mb-6 xl:my-0'>
                            <h2 className='text-lg font-semibold border-b pb-2'>
                                কে বেশি ভয়ানক?
                            </h2>
                            <ProgressBar
                                stats={'যে দল ১৫ বছর ধরে খেয়ে গেলো'}
                                completedPercentage={'85%'}
                                styles={{
                                    backgroundColor: 'blue',
                                    borderRadius: '4px',
                                }}
                            />

                            <ProgressBar
                                stats={'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই'}
                                completedPercentage={'90%'}
                                styles={{
                                    backgroundColor: 'orange',
                                    borderRadius: '4px',
                                }}
                            />
                            <ProgressBar
                                stats={'উভয়েই অনেক বেশি ভয়ানক '}
                                completedPercentage={'70%'}
                                styles={{
                                    backgroundColor: 'red',
                                    borderRadius: '4px',
                                }}
                            />
                            <ProgressBar
                                stats={'নতুন সরকার বেশি ভয়ানক হবে'}
                                completedPercentage={'75%'}
                            />
                        </div>
                        {/* ... */}
                        <div className='col-span-1 bg-gray-100 p-6 rounded-lg mb-6 xl:my-0'>
                            <h2 className='text-lg font-semibold border-b pb-2'>
                                কে বেশি ভয়ানক?
                            </h2>
                            <ProgressBar
                                stats={'যে দল ১৫ বছর ধরে খেয়ে গেলো'}
                                completedPercentage={'85%'}
                                styles={{
                                    backgroundColor: 'blue',
                                    borderRadius: '4px',
                                }}
                            />

                            <ProgressBar
                                stats={'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই'}
                                completedPercentage={'90%'}
                                styles={{
                                    backgroundColor: 'orange',
                                    borderRadius: '4px',
                                }}
                            />
                            <ProgressBar
                                stats={'উভয়েই অনেক বেশি ভয়ানক '}
                                completedPercentage={'70%'}
                                styles={{
                                    backgroundColor: 'red',
                                    borderRadius: '4px',
                                }}
                            />
                            <ProgressBar
                                stats={'নতুন সরকার বেশি ভয়ানক হবে'}
                                completedPercentage={'75%'}
                            />
                        </div>
                        {/* ... */}
                        <div className='col-span-1 bg-gray-100 p-6 rounded-lg mb-6 xl:my-0'>
                            <h2 className='text-lg font-semibold border-b pb-2'>
                                কে বেশি ভয়ানক?
                            </h2>
                            <ProgressBar
                                stats={'যে দল ১৫ বছর ধরে খেয়ে গেলো'}
                                completedPercentage={'85%'}
                                styles={{
                                    backgroundColor: 'blue',
                                    borderRadius: '4px',
                                }}
                            />

                            <ProgressBar
                                stats={'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই'}
                                completedPercentage={'90%'}
                                styles={{
                                    backgroundColor: 'orange',
                                    borderRadius: '4px',
                                }}
                            />
                            <ProgressBar
                                stats={'উভয়েই অনেক বেশি ভয়ানক '}
                                completedPercentage={'70%'}
                                styles={{
                                    backgroundColor: 'red',
                                    borderRadius: '4px',
                                }}
                            />
                            <ProgressBar
                                stats={'নতুন সরকার বেশি ভয়ানক হবে'}
                                completedPercentage={'75%'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
