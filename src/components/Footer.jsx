import logo from '../assets/logoNew.png';
import Social from './common/Social';

export default function Footer() {
    return (
        <section className=' bg-[#002D21] relative'>
            <div className=' container mx-auto px-10 md:px-0 md:grid grid-cols-4 flex-wrap gap-6 pt-12 pb-6 md:py-14 text-center md:text-left'>
                <div className='col-span-2 -mt-2 md:mr-6 text-center md:text-left text-accent my-6 md:my-0 border-b md:border-0 pb-4 md:pb-0'>
                    <a
                        href='https://flowbite.com'
                        className='flex justify-center md:justify-start '
                    >
                        <img class='h-12 w-auto' src={logo} alt='' />
                    </a>
                    <div className='mt-4'>
                        <p className=' leading-8'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummynibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div className='md:mr-auto col-span-1 my-6 md:my-0 border-b md:border-0 pb-4 md:pb-0'>
                    <h2 className='mb-4 text-lg text-accent font-bold leading-none '>
                        আমরা আছি
                    </h2>
                    <h3 className='mb-4 text-md text-accent'>সকল জনমত</h3>
                    <h3 className='mb-4 text-md text-accent'>
                        ২০২৪ এর বাংলাদেশ
                    </h3>
                    <h3 className='text-md text-accent'>প্রাইভেসি & পলিসি</h3>
                </div>
                {/* .... */}
                <div className='mr-auto col-span-1 text-center md:text-left my-6 md:my-0'>
                    <h2 className='mb-5 text-lg text-accent font-bold leading-none '>
                        আমাদের সাথে থাকুন
                    </h2>
                    <Social />
                </div>
            </div>
            <div className='bg-[#00596f]  mx-auto text-center py-5'>
                <p className='text-accent'>
                    © 2025{' '}
                    <a className=' text-red-300' href='#'>
                        jonomot.com
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </section>
    );
}
