import React from 'react';
import ProgressBar from '../common/ProgressBar';

const AllJonomot = () => {
    return (
        <div className='bg-white py-32'>
            <div className=' container mx-auto'>
                <h2 className='text-2xl font-semibold mb-14 pb-2 inline-block border-b-2 border-indigo-500'>
                    সর্বশেষ ভোটিং স্ট্যাটস
                </h2>

                <div className='grid grid-cols-3 gap-6'>
                    <div className='col-span-1 bg-gray-100 p-6 rounded-lg'>
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
                    <div className='col-span-1 bg-gray-100 p-6 rounded-lg'>
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
                    <div className='col-span-1 bg-gray-100 p-6 rounded-lg'>
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
};

export default AllJonomot;
