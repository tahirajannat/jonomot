import { React, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectVotePolls,
    updateVotePolls,
} from '../../redux/reducers/votePollsSlice';
import ProgressBarAfterVote from '../common/ProgressBarAfterVote';

export default function AllJonomot() {
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

    return (
        <div className='bg-white py-16'>
            <div className='container mx-auto px-4 sm:px-0'>
                <h2 className='text-2xl font-semibold mb-10 xl:mb-14 pb-2 inline-block border-b-2 border-indigo-500'>
                    পূর্ববর্তী সকল জনমত স্ট্যাটস
                </h2>

                <div className='xl:grid xl:grid-cols-3 gap-6'>
                    {votePolls.slice(0, 6).map((poll) => {
                        const totalVotes = poll.options.reduce(
                            (sum, opt) => sum + (opt.vote || 0),
                            0
                        );

                        const normalizedOptions = poll.options
                            .slice(0, 4)
                            .map((option) => ({
                                ...option,
                                percentage:
                                    totalVotes > 0
                                        ? (
                                              (option.vote / totalVotes) *
                                              100
                                          ).toFixed(2)
                                        : '0.00',
                            }));

                        return (
                            <div
                                key={poll.question_id}
                                className='col-span-1 bg-secondary shadow-lg rounded-lg p-6 mb-6 xl:my-0'
                            >
                                <h2 className='text-lg font-semibold border-b pb-2'>
                                    {poll.title}
                                </h2>

                                {normalizedOptions.map((option, index) => (
                                    <div
                                        key={option.option_id}
                                        className='flex items-center space-x-6 mb-4'
                                    >
                                        <div className='relative'>
                                            <input
                                                type='checkbox'
                                                id={`checkbox-${option.option_id}`}
                                                className='peer appearance-none w-4 h-4 sm:h-7 sm:w-8 border-2 border-gray-400 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none'
                                                checked
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
