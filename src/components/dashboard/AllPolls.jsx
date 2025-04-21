import React, { useState } from 'react';
export default function AllPolls() {
    const [allData, setAllData] = useState([]);

    console.log(allData);
    const totalData = allData.length;

    return (
        <div className='w-full  bg-gray-50'>
            <div className=' mx-auto sm:px-4 lg:px-8'>
                <div className='flex flex-col'>
                    <div className='mb-4'>
                        <h1 className='text-xl font-bold text-black capitalize my-4'>
                            All Polls
                        </h1>
                    </div>
                    <div className='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
                        <div className='flex items-center py-2'>
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                id='inline-searcg'
                                type='text'
                                placeholder='Search'
                            />
                        </div>
                        <div className='flex items-center py-2'>
                            <a
                                href=''
                                className='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:shadow-outline'
                            >
                                Create new
                            </a>
                        </div>
                    </div>
                    <div className='-my-2 py-2 sm:-mx-6 sm:px-4 lg:-mx-8 lg:px-8'>
                        <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
                            <table className='min-w-full'>
                                <thead>
                                    <tr className='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider'>
                                        <th className='px-4 py-3 text-left font-medium'>
                                            <input
                                                className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                                                type='checkbox'
                                            />
                                        </th>
                                        <th className='px-4 py-3 text-left font-medium'>
                                            Poll Title
                                        </th>

                                        <th className='px-4 py-3 text-left font-medium'>
                                            Slug
                                        </th>

                                        <th className='px-4 py-3 text-left font-medium'>
                                            Published Date
                                        </th>
                                        <th className='px-4 py-3 text-left font-medium'>
                                            Count
                                        </th>
                                        <th className='px-4 py-3 text-left font-medium'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {/* <!-- HEAD end -->

            <!-- BODY start --> */}
                                <tbody className='bg-white'>
                                    {allData.map((brand) => (
                                        <tr>
                                            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <input
                                                    className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                                                    type='checkbox'
                                                />
                                            </td>
                                            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div className='text-sm leading-5 text-gray-900'>
                                                    {brand.brand_name}
                                                </div>
                                            </td>

                                            <td className='px-2 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div className='text-sm leading-5 text-blue-600 line-clamp-1'>
                                                    <a
                                                        href='#'
                                                        className='hover:underline'
                                                    >
                                                        https://pink-lilies/product/
                                                        {brand.brand_slug}
                                                    </a>
                                                </div>
                                            </td>
                                            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                                                created_at
                                            </td>
                                            <td className='px-2 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <span className='px-2 inline-flex text-xs leading-5 font-semibold text-yellow-800'>
                                                    {totalData}
                                                </span>
                                            </td>

                                            <td className='px-4 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                                                <div className='flex gap-4'>
                                                    <a
                                                        href='#'
                                                        className='text-red-600 hover:text-red-900 focus:outline-none focus:underline'
                                                    >
                                                        <HiTrash />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline'
                                                    >
                                                        <FaRegEdit />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
