import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoNew.png';

export default function Header() {
    return (
        <div>
            <header className='bg-secondary py-6'>
                <nav
                    className='container px-12 mx-auto flex items-center justify-between'
                    aria-label='Global'
                >
                    <div className='flex lg:flex-1'>
                        <Link to='/' className='-m-1.5 '>
                            <span className='sr-only'>Your Company</span>
                            <img className='h-12 w-auto' src={logo} alt='' />
                            {/* <span className='text-white text-2xl font-bold'>
                                জনমত
                            </span> */}
                        </Link>
                    </div>
                    <div className='flex lg:hidden'>
                        <button
                            type='button'
                            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12 text-black'>
                        <Link
                            to='/'
                            className='text-base font-semibold leading-6 text-black border-b-2 border-primary hover:text-white transition-all duration-300'
                        >
                            ভোট
                        </Link>

                        <Link
                            to='/all-votes'
                            className='text-base font-semibold leading-6 text-black hover:text-white transition-all duration-300'
                        >
                            সকল জনমত
                        </Link>
                    </div>
                    {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                        <a
                            href='#'
                            className='text-sm font-semibold leading-6 text-white'
                        >
                            Log in <span aria-hidden='true'>&rarr;</span>
                        </a>
                    </div> */}
                </nav>
                {/* <div className='lg:hidden' role='dialog' aria-modal='true'>
                    <div className='fixed inset-0 z-10'></div>
                    <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                        <div className='flex items-center justify-between'>
                            <a href='#' className='-m-1.5 p-1.5'>
                                <span className='sr-only'>Your Company</span>
                                <img
                                    className='h-8 w-auto'
                                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                                    alt=''
                                />
                            </a>
                            <button
                                type='button'
                                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                            >
                                <span className='sr-only'>Close menu</span>
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                       strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-6 flow-root'>
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-2 py-6'>
                                    <a
                                        href='#'
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50'
                                    >
                                        Product
                                    </a>
                                    <a
                                        href='#'
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50'
                                    >
                                        Features
                                    </a>
                                    <a
                                        href='#'
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50'
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href='#'
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50'
                                    >
                                        Company
                                    </a>
                                </div>
                                <div className='py-6'>
                                    <a
                                        href='#'
                                        className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50'
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </header>
        </div>
    );
}
