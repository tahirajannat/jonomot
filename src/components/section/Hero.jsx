import React from 'react';
import vectorImage from '../../assets/Vector.png';
export default function Hero() {
    return (
        <div className='bg-secondary text-white hero-image'>
            <div className='container mx-auto flex flex-col lg:flex-row items-center relative min-h-[90vh]'>
                {/* Left Content */}
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <img
                        src={vectorImage}
                        alt=''
                        className='absolute top-0 left-0 w-40 h-40 '
                    />
                    <p className='text-base tracking-wide font-thin text-primary uppercase'>
                        Strategies for Success
                    </p>
                    <h2 className='text-[36px] lg:text-[62px] font-bold leading-tight mt-4'>
                        Go to <br />
                        the Polls
                    </h2>
                    <p className='text-white my-6 text-sm lg:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className='flex flex-wrap gap-4 items-center justify-center lg:justify-start mt-4'>
                        <button className='bg-primary px-6 py-3 text-lg text-white capitalize rounded-lg'>
                            Get the Poll
                        </button>
                        {/* Statistic Boxes */}
                        <div className='flex items-center gap-2 bg-[#1a1f28] px-4 py-3 rounded-lg shadow-lg'>
                            <span className='text-3xl font-bold'>817</span>
                            <span className='text-sm'>Polls</span>
                        </div>
                        <div className='flex items-center gap-2 bg-[#1a1f28] px-4 py-3 rounded-lg shadow-lg'>
                            <span className='text-3xl font-bold'>96</span>
                            <span className='text-sm'>Votes</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className='w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center'>
                    <div className=''>
                        {/* <img
                            src={heroImage}
                            alt=''
                            className='w-[100%] max-w-full '
                        /> */}
                        {/* <div className='absolute inset-0 bg-blue-500 blur-lg rounded-full opacity-50'></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
