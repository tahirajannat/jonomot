import React from 'react';
import ProgressBar from './common/ProgressBar';

export default function Stats({ voteCounts, totalVotes, pollData }) {
    const calculatePercentage = (optionId) => {
        if (totalVotes === 0) return 0;
        return (voteCounts[optionId] / totalVotes) * 100;
    };
    const getHighestPercentageOptions = () => {
        let highestPercentage = 0;
        let highestOptions = [];

        pollData.forEach((poll) => {
            poll.poll_options.forEach((option) => {
                const percentage = calculatePercentage(option.id);
                if (percentage > highestPercentage) {
                    highestPercentage = percentage;
                    highestOptions = [option.option];
                } else if (percentage === highestPercentage) {
                    highestOptions.push(option.option);
                }
            });
        });

        return { highestOptions, highestPercentage };
    };

    const { highestOptions, highestPercentage } = getHighestPercentageOptions();
    return (
        <div className='bg-white p-8 xl:p-14  h-full'>
            <h2 className='text-3xl font-bold pb-6 xl:pb-8 border-b mb-5 xl:pt-4'>
                জনমত
            </h2>
            {pollData && pollData.length > 0 ? (
                <div>
                    {pollData.map((vote) => (
                        <div key={vote.id}>
                            <h3 className='text-2xl font-semibold'>
                                {vote.poll_title}
                            </h3>
                            {vote.poll_options.map((option, index) => (
                                <ProgressBar
                                    key={option.id}
                                    stats={option.option}
                                    completedPercentage={`${calculatePercentage(
                                        option.id
                                    ).toFixed(0)}%`}
                                    styles={{
                                        backgroundColor:
                                            index === 0
                                                ? '#0000ff'
                                                : index === 1
                                                ? '#ff0000'
                                                : index === 2
                                                ? '#ffa500'
                                                : index === 3
                                                ? '#0cbd06'
                                                : '',

                                        borderRadius: '4px',
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No polls available</p>
            )}
            <div className='mt-10 xl:mt-20'>
                <p>
                    {totalVotes === 0 ? (
                        <>
                            <span className='text-indigo-500 font-bold'>
                                রেজাল্ট:{' '}
                            </span>
                            এখনও কোন ভোট করা হয়নি
                        </>
                    ) : (
                        <>
                            <span className='text-indigo-500 font-bold'>
                                রেজাল্ট:{' '}
                            </span>
                            সর্বসাধারণের মতামত অনুযায়ী{' '}
                            <span className='font-bold'>
                                {highestOptions.map((option, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? 'text-red-500'
                                                : 'text-teal-700'
                                        }
                                    >
                                        {option}
                                        {index < highestOptions.length - 1 && (
                                            <span className='text-indigo-500'>
                                                {' '}
                                                এবং{' '}
                                            </span>
                                        )}
                                    </span>
                                ))}
                                {/* Uncomment if you want to show percentage */}
                                {/* <span className="text-indigo-500 font-bold">
                    {' '}
                    ({highestPercentage.toFixed(2)}%)
                </span> */}
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
