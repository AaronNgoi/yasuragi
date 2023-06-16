import React from 'react';
import packaging from '../assets/site/storyPackaging.webp'
import Footer from "../components/Footer";

const Packaging: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">PACKAGING</h1>
                </div>
                <div className='formStoryComponent flex flex-col-reverse items-center lg:flex-row'>

                    <div className='w-full lg:w-1/2'>
                        <h3 className="form3Header">ECO-CONSCIOUS PACKAGING</h3>
                        <p>Yasuragi Tea delivers top-tier matcha with environmental responsibility in mind. Our packaging minimizes waste, employing eco-friendly, recyclable and biodegradable materials.</p>
                        <h3 className="form3Header">SUSTAINABILITY AT HEART</h3>
                        <p>Our respect for the planet shines through our commitment to sustainability. It's evident in every step we take, from the selection of materials to the design of our packaging.</p>
                        <h3 className="form3Header">REDUCING WASTE</h3>
                        <p>We strive to make our packaging as minimal as possible, reducing unnecessary waste and making sure that every part can be reused or recycled. Our goal is to minimize our impact on the environment while delivering a superior product.</p>
                    </div>

                    <div className='w-full lg:w-1/2 lg:ml-16'>
                        <img src={packaging} alt="Packaging" className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Packaging;
