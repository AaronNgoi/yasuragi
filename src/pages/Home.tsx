import React from 'react';
import LandingPage from '../components/LandingPage';
import News from '../components/News';
import FeaturedCollection from "../components/FeaturedCollection";
import Benefits from "../components/Benefits";

const Home: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <div className='blk'>
            <LandingPage />
            </div>
            <News/>
            <FeaturedCollection/>
            <Benefits/>
            <div className='text-20 mt-20 bg-green-500'>"Hello World"</div>
        </div>
    );
};

export default Home;
