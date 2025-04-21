import React from 'react';

export default function SocialShare() {
    return (
        <>
            <p className='text-base lg:text-xl font-bold text-black mb-2'>
                Share with friends
            </p>
            <div className='flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-4'>
                <div>
                    <span className='text-xs md:text-base 2xl:text-lg'>
                        12k
                    </span>
                    <button className='flex items-center space-x-1 bg-blue-600 text-white px-1 md:px-3 py-1 rounded hover:bg-blue-700 sm:mt-2'>
                        <span className='text-xs md:text-base 2xl:text-lg '>
                            Facebook
                        </span>
                    </button>
                </div>
                <div>
                    <span className='sm:pb-2 text-xs md:text-base 2xl:text-lg'>
                        1.2k
                    </span>
                    <button className='flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-1 md:px-3 py-1 rounded hover:from-pink-600 hover:to-orange-600 sm:mt-2'>
                        <span className='text-xs md:text-base 2xl:text-lg '>
                            Instagram
                        </span>
                    </button>
                </div>
                <div>
                    <span className='sm:pb-2 text-xs md:text-base 2xl:text-lg'>
                        12k
                    </span>
                    <button className='flex items-center space-x-1 bg-blue-400 text-white px-1 md:px-3 py-1 rounded hover:bg-blue-500 sm:mt-2'>
                        <span className='text-xs md:text-base 2xl:text-lg '>
                            Twitter
                        </span>
                    </button>
                </div>
                <div>
                    <span className='sm:pb-2 text-xs md:text-base 2xl:text-lg'>
                        12k
                    </span>
                    <button className='flex items-center space-x-1 bg-blue-700 text-white px-1 md:px-3 py-1 rounded hover:bg-blue-800 sm:mt-2'>
                        <span className='text-xs md:text-base 2xl:text-lg'>
                            LinkedIn
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
