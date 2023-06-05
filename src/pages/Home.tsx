import React from 'react';
import LandingPage from '../components/LandingPage';

const Home: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <div className='blk'>
            <LandingPage />
            </div>
            <div className='text-20 mt-20 bg-green-500'>"Hello World"</div>
        </div>
    );
};

export default Home;
