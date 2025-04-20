import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Social() {
    return (
        <div className='my-4 flex gap-4 items-center justify-center md:justify-start'>
            <a className='inline-block p-2 bg-dark  rounded-md'>
                <FaInstagram className='text-white text-md' />
            </a>
            <a className='inline-block p-2 bg-dark  rounded-md'>
                <FaFacebookF className='text-white text-md ' />
            </a>
        </div>
    );
}
