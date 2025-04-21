import React from 'react';
import map from '../../assets/map.png';
import vectorImage from '../../assets/world.png';

export default function Record() {
    return (
        <div className=' bg-secondary relative'>
            <div className='pt-24 pb-48 container mx-auto px-4'>
                <img
                    src={vectorImage}
                    alt=''
                    className='absolute z-0 top-0 left-0 w-1/4 '
                />
                <div className='xl:grid xl:grid-cols-2 gap-6 text-white'>
                    <div className='z-50'>
                        <div className='text-left'>
                            <p className='text-base tracking-wide font-thin text-primary '>
                                Our Vision
                            </p>
                            <h2 className=' text-white text-3xl font-normal tracking-wider leading-relaxed mt-4'>
                                Users from all over the world
                            </h2>

                            <p className='text-[#CFCFCF] my-5 pr-20'>
                                Learn more about our advanced analytics and
                                decentralized financial tools designed for a
                                future of stronger, secure, and smarter
                                financial growth.
                            </p>
                        </div>
                        <div className='flex space-x-8 mt-6'>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>32K+</p>
                                <p className='text-[#CFCFCF]'>Users</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>250+</p>
                                <p className='text-gray-400'>Partners</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>87+</p>
                                <p className='text-gray-400'>Key Countries</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src={map}
                            alt=''
                            className=' top-0 left-0 w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
