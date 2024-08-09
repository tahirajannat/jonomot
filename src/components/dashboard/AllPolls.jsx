import React, { useState } from 'react';
export default function AllPolls() {
    const [allData, setAllData] = useState([]);

    console.log(allData);
    const totalData = allData.length;

    return (
        <div class='w-full  bg-gray-50'>
            <div class=' mx-auto sm:px-4 lg:px-8'>
                <div class='flex flex-col'>
                    <div class='mb-4'>
                        <h1 className='text-xl font-bold text-black capitalize my-4'>
                            All Polls
                        </h1>
                    </div>
                    <div class='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
                        <div class='flex items-center py-2'>
                            <input
                                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                id='inline-searcg'
                                type='text'
                                placeholder='Search'
                            />
                        </div>
                        <div class='flex items-center py-2'>
                            <a
                                href=''
                                class='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:shadow-outline'
                            >
                                Create new
                            </a>
                        </div>
                    </div>
                    <div class='-my-2 py-2 sm:-mx-6 sm:px-4 lg:-mx-8 lg:px-8'>
                        <div class='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
                            <table class='min-w-full'>
                                <thead>
                                    <tr class='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider'>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            <input
                                                class='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                                                type='checkbox'
                                            />
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Poll Title
                                        </th>

                                        <th class='px-4 py-3 text-left font-medium'>
                                            Slug
                                        </th>

                                        <th class='px-4 py-3 text-left font-medium'>
                                            Published Date
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Count
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {/* <!-- HEAD end -->

            <!-- BODY start --> */}
                                <tbody class='bg-white'>
                                    {allData.map((brand) => (
                                        <tr>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <input
                                                    class='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                                                    type='checkbox'
                                                />
                                            </td>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div class='text-sm leading-5 text-gray-900'>
                                                    {brand.brand_name}
                                                </div>
                                            </td>

                                            <td class='px-2 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div class='text-sm leading-5 text-blue-600 line-clamp-1'>
                                                    <a
                                                        href='#'
                                                        className='hover:underline'
                                                    >
                                                        https://pink-lilies/product/
                                                        {brand.brand_slug}
                                                    </a>
                                                </div>
                                            </td>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                                                created_at
                                            </td>
                                            <td class='px-2 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <span class='px-2 inline-flex text-xs leading-5 font-semibold text-yellow-800'>
                                                    {totalData}
                                                </span>
                                            </td>

                                            <td class='px-4 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                                                <div className='flex gap-4'>
                                                    <a
                                                        href='#'
                                                        class='text-red-600 hover:text-red-900 focus:outline-none focus:underline'
                                                    >
                                                        <HiTrash />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        class='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline'
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
