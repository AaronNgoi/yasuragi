import React from 'react';
import LandingPage from '../components/LandingPage';
import News from '../components/News';
import FeaturedCollection from "../components/FeaturedCollection";
import Benefits from "../components/Benefits";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <>
        <div className='flex flex-col'>
            <LandingPage />
            <News/>
        </div>
        <div className='flex flex-col'>
            <FeaturedCollection/>
            <Benefits/>
            <Blog/>
            <Newsletter/>
            <Footer/>
            {/*<div className='text-20 testmargin bg-green-500'>"Hello World"</div>*/}
        </div>
    </>
    );
};

export default Home;
