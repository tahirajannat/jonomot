import React from 'react';
import ProgressBar from './common/ProgressBar';

export default function Stats({ voteCounts, pollData }) {
    const calculatePercentage = (questionId, optionId) => {
        const poll = pollData.find((poll) => poll.question_id === questionId);
        if (!poll) return 0;

        const totalVotesForQuestion = poll.options.reduce(
            (total, option) => total + option.vote,
            0
        );
        if (totalVotesForQuestion === 0) return 0;

        const votesForOption =
            poll.options.find((option) => option.option_id === optionId)
                ?.vote || 0;
        return (votesForOption / totalVotesForQuestion) * 100;
    };

    const getHighestPercentageOptionsForEachPoll = () => {
        const highestPercentagesByQuestionId = {};

        pollData.forEach((poll) => {
            let highestPercentage = 0;
            let highestOptions = [];

            poll.options.forEach((option) => {
                const percentage = calculatePercentage(
                    poll.question_id,
                    option.option_id
                );
                if (percentage > highestPercentage) {
                    highestPercentage = percentage;
                    highestOptions = [option.title];
                } else if (percentage === highestPercentage) {
                    highestOptions.push(option.title);
                }
            });

            highestPercentagesByQuestionId[poll.question_id] = {
                highestOptions,
                highestPercentage,
            };
        });

        return highestPercentagesByQuestionId;
    };

    const highestPercentagesByQuestionId =
        getHighestPercentageOptionsForEachPoll();

    const firstPollId = pollData[0]?.question_id;
    const highestOptions =
        highestPercentagesByQuestionId[firstPollId]?.highestOptions || [];

    return (
        <div className='bg-white p-8 xl:p-14 h-full'>
            <h2 className='text-3xl font-bold pb-6 xl:pb-8 border-b mb-5 xl:pt-4'>
                জনমত
            </h2>
            {pollData && pollData.length > 0 ? (
                <div>
                    {pollData.slice(0, 1).map((vote) => (
                        <div key={vote.question_id}>
                            <h3 className='text-2xl font-semibold'>
                                {vote.title}
                            </h3>
                            {vote.options &&
                                vote.options.map((option, index) => (
                                    <ProgressBar
                                        key={option.option_id}
                                        stats={option.title}
                                        completedPercentage={`${calculatePercentage(
                                            vote.question_id,
                                            option.option_id
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
                    {highestOptions.length === 0 ? (
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
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
