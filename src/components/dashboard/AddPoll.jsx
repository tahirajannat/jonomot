import React, { useState } from 'react';
import Button from '../common/Button';

export default function AddPoll() {
    const [formData, setFormData] = useState({
        poll_title: '',
        poll_options: ['', '', '', ''], // Array to store options
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        // Handle poll title change
        if (name === 'poll_title') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            // Handle poll options change
            const updatedOptions = [...formData.poll_options];
            updatedOptions[index] = value;

            setFormData((prevData) => ({
                ...prevData,
                poll_options: updatedOptions,
            }));
        }
    };

    return (
        <div className='p-6 mx-auto bg-gray-50 rounded-md shadow-md'>
            <h1 className='text-xl font-bold text-black capitalize my-4'>
                Add New Poll
            </h1>

            <form className='mt-8'>
                <div>
                    {/* Poll Title */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='poll_title'
                        >
                            Poll Title
                        </label>
                        <input
                            id='poll_title'
                            type='text'
                            name='poll_title'
                            value={formData.poll_title}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>

                    {/* Poll Options */}
                    <div className='my-4'>
                        <label className='text-black capitalize'>
                            Poll Options
                        </label>
                        {formData.poll_options.map((option, index) => (
                            <div key={index} className='mt-2'>
                                <input
                                    type='text'
                                    name={`option-${index}`}
                                    value={option}
                                    onChange={(e) => handleChange(e, index)}
                                    placeholder={`Option ${index + 1}`}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-end mt-6'>
                    <Button buttonTitle={'Add'} />
                </div>
            </form>
        </div>
    );
}
