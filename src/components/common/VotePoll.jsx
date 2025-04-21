import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectVotePolls,
    updateVotePolls,
} from '../../redux/reducers/votePollsSlice';
import Option from './Option';

export default function VotePoll() {
    const dispatch = useDispatch();
    const votePolls = useSelector(selectVotePolls);

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

    return (
        <div className='bg-white p-4 md:p-8 h-full w-full text-black shadow-lg rounded-lg xl:pt-10 md:pb-10 xl:pb-14'>
            <div className='border-b sm:pb-4 xl:py-10'>
                <h2 className='md:text-xl lg:text-3xl font-bold sm:pb-2'>
                    {poll.title}
                </h2>

                {/* {poll.subtitle && (
                    <p className='text-sm text-gray-600'>{poll.subtitle}</p>
                )}

                {poll.comment && (
                    <span className='text-dark text-xs lg:text-sm'>
                        {poll.comment}
                    </span>
                )} */}
                <span className='text-dark text-xs lg:text-sm'>
                    আপনার একান্ত নিজস্ব মতামত প্রত্যাশিত
                </span>

                {/* Optional Result */}
                {/* {hasVoted && poll.result && (
                    <div className='mt-4 text-sm text-green-600 font-semibold'>
                        ✅ সঠিক উত্তর: {poll.result}
                    </div>
                )} */}
            </div>

            {/* 👇 Pass poll explicitly */}
            <Option />
        </div>
    );
}
