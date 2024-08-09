import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ setActiveComponent }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [path, setPath] = useState();

    const handleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    };
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        setPath(pathname);
        console.log(pathname);
    }, [location.pathname]);
    console.log('path', path);
    return (
        <div className=' '>
            <div className=''>
                <div className='text-center text-black px-6'></div>
                <ul className='mt-11 text-black'>
                    <li className=' cursor-pointer sm:justify-start px-4 flex items-center justify-center  text-lg font-semibold mb-6'>
                        <Link to='/'>
                            <span className='ml-3 hidden sm:block  text-black font-semibold tracking-wide  transition-colors'>
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li className=''>
                        {/* <button
                            className={` py-2 w-full text-left px-8 flex items-center gap-8 ${
                                showDropdown && 'bg-primary'
                            }`}
                            onClick={handleDropdown}
                        >
                            Products
                            {showDropdown ? (
                                <span className='inline-block'>
                                    <HiChevronUp className='text-2xl' />
                                </span>
                            ) : (
                                <span className='inline-block'>
                                    <HiChevronDown className='text-2xl' />
                                </span>
                            )}
                        </button> */}
                        <ul className={` text-base  mb-6 `}>
                            <li>
                                <Link
                                    to='/dashboard/add-poll'
                                    className={`block my-2 ml-8 px-4 ${
                                        location.pathname.includes(
                                            '/dashboard/add-poll'
                                        )
                                            ? 'border-l-2 border-indigo-500 text-indigo-500'
                                            : ''
                                    }`}
                                >
                                    Add New Poll
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/dashboard/all-polls'
                                    className={`block my-2 ml-8 px-4 ${
                                        location.pathname.includes(
                                            '/dashboard/all-polls'
                                        )
                                            ? 'border-l-2 border-indigo-500 text-indigo-500'
                                            : ''
                                    }`}
                                >
                                    All Polls
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='px-8'>
                        <Link to='/features' className='block py-2'>
                            Features
                        </Link>
                    </li>
                    <li className='px-8'>
                        <Link to='/download' className='block py-2'>
                            Download
                        </Link>
                    </li>
                    <li className='px-8'>
                        <Link to='/faq' className='block py-2'>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
