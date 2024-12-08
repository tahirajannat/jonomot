import React from 'react';
import vectorImage from '../../assets/featureBg.png';
import ProgressBar from '../common/ProgressBar';

export default function Feature() {
    return (
        <div className=' bg-secondary relative'>
            <div className='pt-24 pb-48 container mx-auto '>
                <div className='text-center mb-12'>
                    <p className='text-base tracking-wide font-thin text-primary '>
                        Featured
                    </p>
                    <h2 className=' text-white text-3xl font-normal tracking-wider mt-4'>
                        Vote Lists
                    </h2>
                </div>
                <img
                    src={vectorImage}
                    alt=''
                    className='absolute bottom-0 right-0 w-4/12'
                />
                <div className='xl:grid xl:grid-cols-3 gap-6 text-white'>
                    <div className='col-span-1 border border-primary p-6 rounded-lg mb-6 xl:my-0'>
                        <h2 className='text-lg font-semibold border-b pb-2'>
                            কে বেশি ভয়ানক?
                        </h2>
                        <ProgressBar
                            stats={'যে দল ১৫ বছর ধরে খেয়ে গেলো'}
                            completedPercentage={'85%'}
                            styles={{
                                backgroundColor: 'blue',
                                borderRadius: '4px',
                            }}
                        />

                        <ProgressBar
                            stats={'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই'}
                            completedPercentage={'90%'}
                            styles={{
                                backgroundColor: 'orange',
                                borderRadius: '4px',
                            }}
                        />
                        <ProgressBar
                            stats={'উভয়েই অনেক বেশি ভয়ানক '}
                            completedPercentage={'70%'}
                            styles={{
                                backgroundColor: 'red',
                                borderRadius: '4px',
                            }}
                        />
                        <ProgressBar
                            stats={'নতুন সরকার বেশি ভয়ানক হবে'}
                            completedPercentage={'75%'}
                        />
                    </div>
                    {/* ... */}
                    <div className='col-span-1 border border-primary p-6 rounded-lg mb-6 xl:my-0'>
                        <h2 className='text-lg font-semibold border-b pb-2'>
                            কে বেশি ভয়ানক?
                        </h2>
                        <ProgressBar
                            stats={'যে দল ১৫ বছর ধরে খেয়ে গেলো'}
                            completedPercentage={'85%'}
                            styles={{
                                backgroundColor: 'blue',
                                borderRadius: '4px',
                            }}
                        />

                        <ProgressBar
                            stats={'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই'}
                            completedPercentage={'90%'}
                            styles={{
                                backgroundColor: 'orange',
                                borderRadius: '4px',
                            }}
                        />
                        <ProgressBar
                            stats={'উভয়েই অনেক বেশি ভয়ানক '}
                            completedPercentage={'70%'}
                            styles={{
                                backgroundColor: 'red',
                                borderRadius: '4px',
                            }}
                        />
                        <ProgressBar
                            stats={'নতুন সরকার বেশি ভয়ানক হবে'}
                            completedPercentage={'75%'}
                        />
                    </div>
                    {/* ... */}
                    <div className='col-span-1 border border-primary p-6 rounded-lg mb-6 xl:my-0'>
                        <h2 className='text-lg font-semibold border-b pb-2'>
                            কে বেশি ভয়ানক?
                        </h2>
                        <ProgressBar
                            stats={'যে দল ১৫ বছর ধরে খেয়ে গেলো'}
                            completedPercentage={'85%'}
                            styles={{
                                backgroundColor: 'blue',
                                borderRadius: '4px',
                            }}
                        />

                        <ProgressBar
                            stats={'যে দল ১৫ বছর ধরে কিছু খেতে পারে নাই'}
                            completedPercentage={'90%'}
                            styles={{
                                backgroundColor: 'orange',
                                borderRadius: '4px',
                            }}
                        />
                        <ProgressBar
                            stats={'উভয়েই অনেক বেশি ভয়ানক '}
                            completedPercentage={'70%'}
                            styles={{
                                backgroundColor: 'red',
                                borderRadius: '4px',
                            }}
                        />
                        <ProgressBar
                            stats={'নতুন সরকার বেশি ভয়ানক হবে'}
                            completedPercentage={'75%'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
