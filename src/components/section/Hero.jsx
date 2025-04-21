import React from 'react';
import bdMap from '../../assets/bdMap.png';
import VotePoll from '../common/VotePoll';

export default function Hero() {
    return (
        <div className=' text-white hero-image mb-20 h-[690px] 2xl:h-[720px]'>
            <div className='container px-4 sm:px-12 mx-auto lg:grid grid-cols-12 gap-6 content-end'>
                {/* Left Content */}
                <div className='col-span-7  lg:text-left relative pt-20 z-0 flex justify-end'>
                    <img
                        src={bdMap}
                        alt=''
                        className='z-0 absolute  xl:-bottom-40 2xl:-bottom-72 -right-0 lg:right-0 w-1/2 lg:w-full xl:p-8 2xl:p-24 hidden lg:block'
                    />
                </div>

                {/* Right Image */}
                <div className='col-span-5 xl:my-6 lg:mt-0  justify-center z-20'>
                    <div className=' mt-4 xl:mt-10'>
                        <VotePoll />
                    </div>
                </div>
            </div>
        </div>
    );
}
