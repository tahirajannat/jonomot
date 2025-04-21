import React from 'react';

const Test = () => {
    return (
        <div className='p-20 container '>
            <div
                className="max-w-sm p-6 rounded-xl shadow-md bg-white
            [&>h3]:text-xl [&>h3]:font-semibold 
            [&>p]:text-gray-600 
            [&>div]:bg-blue-500 [&>div:hover]:bg-blue-600 
            [&::before]:content-['★'] [&::before]:text-yellow-400 [&::before]:mr-2 text-center"
            >
                <h3>Pro Plan</h3>
                <p>Great for professionals who need more power.</p>
                <div className='text-white px-4 py-2 mt-4 rounded-md cursor-pointer transition-colors text-center'>
                    Choose Plan
                </div>
            </div>

            <div dir='rtl' className='rtl:ml-4 ltr:mr-4'>
                Directional Spacing
            </div>
            <div className='flex gap-x-3 gap-y-30rem h-44 '>
                <div className='bg-red-600'>Item 1</div>
                <div className='bg-red-200'>Item 2</div>
                <div className='animate-wiggle'>...----===</div>
                <div className='group relative'>
                    <button className='bg-blue-500 group-hover:bg-blue-600'>
                        Hover Me
                    </button>
                    <span className='absolute hidden group-hover:block'>
                        Tooltip
                    </span>
                </div>
                <div>
                    <input type='checkbox' className='peer' />
                    <label className='peer-checked:text-blue-500'>
                        Checked State
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
                <div className='bg-blue-500 p-4'>Item 1</div>
                <div className='bg-blue-500 p-4'>Item 2</div>
                <div className='bg-blue-500 p-4'>Item 3</div>
                <div className='bg-blue-500 p-4'>Item 3</div>
            </div>
        </div>
    );
};

export default Test;
