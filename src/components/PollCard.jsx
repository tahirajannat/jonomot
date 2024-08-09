import React from 'react';

export default function PollCard({ pollData, voteCounts, totalVotes, onVote }) {
    const calculatePercentage = (optionId) => {
        if (totalVotes === 0) return 0;
        return (voteCounts[optionId] / totalVotes) * 100;
    };

    return (
        <div className='bg-white rounded-md'>
            {pollData.length > 0 ? (
                pollData.slice(0, 2).map((data) => (
                    <div key={data.id}>
                        <h2 className='text-3xl font-bold pb-8 border-b mb-5 p-14'>
                            {data.poll_title}
                            <span className='block text-sm mt-3 font-normal text-indigo-500'>
                                আপনার একান্ত নিজস্ব মতামত প্রত্যাশিত
                            </span>
                        </h2>

                        <fieldset aria-label='Poll options'>
                            <div className='-space-y-px rounded-md bg-white p-14 mb-5'>
                                {data.poll_options.map((option) => (
                                    <label
                                        key={option.id}
                                        aria-label={option.option}
                                        aria-description='Please select your preferred option'
                                        className={`relative flex cursor-pointer border p-4 focus:outline-none ${
                                            voteCounts[option.id]
                                                ? 'bg-indigo-50 ring-1 ring-indigo-300'
                                                : ''
                                        }`}
                                    >
                                        <input
                                            type='radio'
                                            name={`poll-${data.id}`}
                                            value={option.id}
                                            onChange={() => onVote(option.id)}
                                            className='mt-[0.30rem] h-4 w-4 shrink-0 cursor-pointer text-indigo-600 focus:ring-none focus:ring-0 outline-none active:ring-offset-0'
                                        />
                                        <span className='ml-3 flex flex-col'>
                                            <span className='block text-base font-medium'>
                                                {option.option}
                                            </span>
                                            <span className='text-sm text-gray-500'>
                                                {calculatePercentage(
                                                    option.id
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
