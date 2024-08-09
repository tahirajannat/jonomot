import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Social() {
    return (
        <div className='my-4 flex gap-4 items-center'>
            <a className='inline-block p-2 bg-indigo-400  rounded-md'>
                <FaInstagram className='text-white text-md' />
            </a>
            <a className='inline-block p-2 bg-indigo-400  rounded-md'>
                <FaFacebookF className='text-white text-md ' />
            </a>
        </div>
    );
}
