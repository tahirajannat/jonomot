import React from 'react';

export default function PollCard({ pollData, voteCounts, totalVotes, onVote }) {
    const calculatePercentage = (optionId) => {
        if (totalVotes === 0) return 0;
        return (voteCounts[optionId] / totalVotes) * 100;
    };

    return (
        <div className='bg-white rounded-md'>
            {pollData && pollData.length > 0 ? (
                pollData.slice(0, 1).map((data) => (
                    <div key={data.question_id}>
                        <h2 className='text-3xl font-bold xl:pb-8 border-b xl:mb-5 p-8 xl:p-14'>
                            {data.title}
                            <span className='block text-sm mt-3 font-normal text-indigo-500'>
                                আপনার একান্ত নিজস্ব মতামত প্রত্যাশিত
                            </span>
                        </h2>

                        <fieldset aria-label='Poll options'>
                            <div className='-space-y-px rounded-md bg-white p-8 xl:p-14 xl:mb-5'>
                                {data.options.map((option) => (
                                    <label
                                        key={option.option_id}
                                        aria-label={option.title}
                                        aria-describedby={`poll-option-${option.option_id}`}
                                        className={`relative flex cursor-pointer border p-4 focus:outline-none ${
                                            voteCounts[option.option_id]
                                                ? 'bg-indigo-50 ring-1 ring-indigo-300'
                                                : ''
                                        }`}
                                    >
                                        <input
                                            type='radio'
                                            name={`poll-${data.question_id}`}
                                            value={option.option_id}
                                            checked={
                                                voteCounts[option.option_id] > 0
                                            }
                                            onChange={() =>
                                                onVote(option.option_id)
                                            }
                                            className='mt-[0.30rem] h-4 w-4 shrink-0 cursor-pointer text-indigo-600 focus:ring-none focus:ring-0 outline-none active:ring-offset-0'
                                        />
                                        <span className='ml-3 flex flex-col'>
                                            <span className='block text-base font-medium'>
                                                {option.title}
                                            </span>
                                            <span
                                                id={`poll-option-${option.option_id}`}
                                                className='text-sm text-gray-500'
                                            >
                                                {calculatePercentage(
                                                    option.option_id
                                                ).toFixed(2)}
                                                % of votes
                                            </span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                ))
            ) : (
                <p>Loading polls...</p>
            )}

            <div className='border-t py-5 p-14 flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <p className='text-md font-medium text-gray-600'>
                        সর্বমোট ভোট :{' '}
                        <span className='text-indigo-500'>{totalVotes}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
