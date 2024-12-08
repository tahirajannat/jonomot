import Social from './common/Social';

export default function Footer() {
    return (
        <section className=' bg-[#007b9a] relative'>
            <div className=' container mx-auto md:flex gap-6 justify-between py-14 text-center xl:text-left'>
                <div className='-mt-2 xl:w-2/6 mr-6 text-center xl:text-left text-accent'>
                    <a href='https://flowbite.com' className='flex   '>
                        {/* <img
                            src={Logo}
                            className='mr-3 sm:h-20 h-6 '
                            alt='Flowbite Logo'
                        /> */}
                        <span className='text-accent text-2xl font-bold '>
                            জনমত
                        </span>
                    </a>
                    <div className='mt-4'>
                        <p className=' leading-8'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummynibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div className='mr-auto'>
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
                <div className='mr-auto'>
                    <h2 className='mb-5 text-lg text-accent font-bold leading-none'>
                        আমাদের সাথে থাকুন
                    </h2>
                    <Social />
                </div>
                {/* .... */}
                <div className='mr-auto'>
                    <h2 className='mb-5 text-lg text-accent font-bold leading-none'>
                        আমাদের সাথে থাকুন
                    </h2>
                    <Social />
                </div>
            </div>
            <div className='bg-[#00596f]  mx-auto text-center py-5'>
                <p className='text-accent'>
                    © 2024{' '}
                    <a className=' text-primary' href='#'>
                        jonomot.com
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </section>
    );
}
