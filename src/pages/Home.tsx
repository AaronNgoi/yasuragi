import React from 'react';
import LandingPage from '../components/LandingPage';
import News from '../components/News';
import FeaturedCollection from "../components/FeaturedCollection";
import Benefits from "../components/Benefits";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import About from "../components/About";

const Home: React.FC = () => {
    return (
        <>
        <div className='flex flex-col'>
            <LandingPage />
            <News/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <FeaturedCollection/>
            <Benefits/>
            <About/>
            <Blog/>
            <Newsletter/>
            <Footer/>
        </div>
    </>
    );
};

export default Home;
