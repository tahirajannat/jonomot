import React from 'react';
import Option from './Option';

export default function VotePoll() {
    return (
        <div className='bg-white p-4 xl:p-8 first-letter: h-full w-full text-black shadow-lg rounded-lg xl:pt-10 xl:pb-14'>
            <div className='sm:pb-4 border-b  xl:pt-4  sm:py-4 xl:py-10'>
                {/* Title */}
                <h2 className='lg:text-3xl font-bold sm:pb-2'>
                    কে বেশি ভয়ানক?
                </h2>
                {/* Description */}

                <span className='text-red-600 text-xs lg:text-sm'>
                    আপনার একান্ত নিজস্ব মতামত প্রত্যাশিত
                </span>
            </div>
            <div>
                <Option />
            </div>
        </div>
    );
}
