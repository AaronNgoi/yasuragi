import React from 'react';
import Footer from "../components/Footer";
import planet from '../assets/site/storyPlanet.webp'

const Planet: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">PLANET</h1>
                </div>
                <div className='formStoryComponent flex flex-col-reverse items-center lg:flex-row'>

                    <div className='w-full lg:w-1/2'>
                        <h3 className="form3Header">OUR PLANET, OUR MATCHA</h3>
                        <p>At Yasuragi Tea, we seek harmony with ourselves and the planet. We're dedicated to reducing our carbon footprint, offering only carbon-neutral deliveries.</p>
                        <h3 className="form3Header">CARBON NEUTRAL DELIVERIES</h3>
                        <p>Every delivery we make is carbon neutral. We actively offset our emissions, contributing to a healthier, more sustainable planet.</p>
                        <h3 className="form3Header">SUSTAINABLE FUTURE</h3>
                        <p>Our aim is not just to minimize our environmental impact, but to create a sustainable future where we give back to the Earth as much as we receive. We're constantly seeking new ways to improve our practices and make our operations more eco-friendly.</p>
                    </div>

                    <div className='w-full lg:w-1/2 lg:ml-16'>
                        <img src={planet} alt="Planet" className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Planet;
