import React from 'react';
import { FaCalendarAlt, FaRegUserCircle } from 'react-icons/fa';
import blogData from '../../data/data.js';

export default function JulyBiplob() {
    return (
        <div className='max-w-4xl mx-auto  px-6 md:px-12 p-4 md:p-8 font-[Bangla]'>
            {/* Title Section */}
            <div className='text-center my-10'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-700 mb-2'>
                    {blogData.title}
                </h1>
                <p className='text-sm  pt-3 text-dark flex flex-wrap justify-center'>
                    <FaRegUserCircle className='text-xl mr-2' />{' '}
                    {blogData.author}
                    {'   '}
                    <FaCalendarAlt className='text-lg ml-6 mr-2' />{' '}
                    {blogData.date}
                </p>
                <p className='text-base text-gray-700 pt-6'>
                    {blogData.description}
                </p>
            </div>

            {/* Cover Image */}
            <img
                src={blogData.coverImage}
                alt='cover'
                className='w-full h-auto rounded-xl shadow-md mb-6'
            />

            {/* Content Renderer */}
            <div className='space-y-6'>
                {blogData.content.map((item, index) => {
                    if (item.type === 'heading') {
                        return (
                            <h3
                                key={index}
                                className='text-xl md:text-2xl font-semibold text-primary'
                            >
                                {item.text}
                            </h3>
                        );
                    } else if (item.type === 'paragraph') {
                        return (
                            <p
                                key={index}
                                className='text-base leading-relaxed text-gray-700'
                            >
                                {item.text}
                            </p>
                        );
                    } else if (item.type === 'list') {
                        return (
                            <ul
                                key={index}
                                className='text-base leading-relaxed text-gray-700 space-y-1'
                            >
                                {item.items.map((listItem, i) => (
                                    <li key={i} class='flex items-center ml-8'>
                                        <svg
                                            class='w-3.5 h-3.5 me-2 text-dark  shrink-0'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                                        </svg>

                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        );
                    } else if (item.type === 'image') {
                        return (
                            <div key={index} className='my-4 text-center'>
                                <img
                                    src={item.url}
                                    alt={item.caption}
                                    className='rounded-lg mx-auto mb-2 w-full object-cover'
                                />
                                <p className='text-sm text-gray-500'>
                                    {item.caption}
                                </p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Tags */}
            <div className='mt-10 flex flex-wrap gap-2'>
                {blogData.tags.map((tag, i) => (
                    <span
                        key={i}
                        className='px-3 py-1 bg-green-100 text-dark rounded-full text-sm'
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Share Buttons */}
            <div className='mt-10 flex gap-4'>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
                >
                    Facebook
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        window.location.href
                    )}&title=${encodeURIComponent(blogData.title)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                    LinkedIn
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                    )}&text=${encodeURIComponent(blogData.title)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500'
                >
                    Twitter
                </a>
            </div>
        </div>
    );
}
