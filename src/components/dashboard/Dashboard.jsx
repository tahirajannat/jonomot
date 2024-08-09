// Dashboard.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPoll from './AddPoll';
import AllPolls from './AllPolls';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <>
            <div className=' mx-auto grid grid-cols-12'>
                <div className='lg:col-span-3 2xl:col-span-2 h-[100vh] bg-gray-200 '>
                    <Sidebar />
                </div>
                <div className='lg:col-span-9 2xl:col-span-10 pt-10 bg-gray-50'>
                    <Routes>
                        <Route path='add-poll' element={<AddPoll />} />
                        <Route path='all-polls' element={<AllPolls />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
