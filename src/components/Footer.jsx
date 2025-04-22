import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoNew.png';
import Social from './common/Social';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when the page changes
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <section className='bg-[#002D21] relative'>
            <div className='container mx-auto  px-6 md:px-12  md:grid grid-cols-4 gap-2 lg:gap-10 pt-8 pb-6 md:py-10 text-center md:text-left'>
                <div className='col-span-2 -mt-2 md:mr-6 text-center md:text-left text-accent my-6 md:my-0 border-b md:border-0 pb-4 md:pb-0'>
                    <Link
                        to='/'
                        className='text-md text-accent font-semibold leading-6 border-b-2 border-none hover:text-white transition-all duration-300'
                    >
                        <img className='h-12 w-auto' src={logo} alt='' />
                    </Link>

                    <div className='mt-2'>
                        <p className='leading-8 text-justify text-base'>
                            জনমত একটি জনমুখী প্ল্যাটফর্ম যেখানে দেশের নানা
                            প্রান্তের মানুষের মতামত একত্রিত হয়। আমাদের
                            লক্ষ্য—বাংলাদেশের নাগরিকদের কণ্ঠস্বরকে ডিজিটাল
                            মাধ্যমে তুলে ধরা। আমরা চেষ্টা করি সময়োপযোগী এবং
                            জনসচেতনতা বৃদ্ধিকারী প্রশ্ন-উত্তরের মাধ্যমে
                            ব্যবহারকারীদের মতামতকে সম্মান জানাতে।
                        </p>
                    </div>
                </div>
                <div className='md:mr-auto col-span-1 my-6 md:my-0 border-b md:border-0 pb-4 md:pb-0'>
                    <h4 className='mb-4 text-lg text-accent font-bold leading-none'>
                        আমরা আছি
                    </h4>

                    <Link
                        to='/all-votes'
                        className='text-md text-accent font-semibold leading-6 border-b-2 border-none hover:text-white transition-all duration-300'
                    >
                        <h3 className='my-4 text-md text-accent'>সকল জনমত</h3>
                    </Link>
                    <Link
                        to='/july-biplob'
                        className='mys-4 text-md text-accent font-semibold leading-6 border-b-2 border-none hover:text-white transition-all duration-300'
                    >
                        <h6 className='my-4'>২০২৪ এর বাংলাদেশ</h6>
                    </Link>
                    <Link
                        to='/#'
                        className=' text-md text-accent font-semibold leading-6 border-b-2 border-none hover:text-white transition-all duration-300'
                    >
                        <h6 className='my-4'>প্রাইভসি & পলিসি</h6>
                    </Link>
                </div>
                {/* .... */}
                <div className='mr-auto col-span-1 text-center md:text-left my-6 md:my-0'>
                    <h2 className='mb-5 text-lg text-accent font-bold leading-none'>
                        আমাদের সাথে থাকুন
                    </h2>
                    <Social />
                </div>
            </div>
            <div className='bg-[#00596f] mx-auto text-center py-5'>
                <p className='text-accent'>
                    © 2025{' '}
                    <a className=' text-red-300' href='#'>
                        jonomot.com
                    </a>
                    . All rights reserved.
                </p>
            </div>

            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-10 right-10 bg-primary text-dark p-3 text-lg rounded-full shadow-lg hover:bg-green-700 hover:text-accent transition-all duration-300 z-50'
                >
                    <FaArrowUp />
                </button>
            )}
        </section>
    );
}
