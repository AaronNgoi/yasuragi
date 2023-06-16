import tradition from '../assets/site/storyTradition.webp'
import React from 'react';
import Footer from "../components/Footer";

const Story: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">STORY</h1>
                </div>
                <div className='formStoryComponent flex flex-col-reverse items-center lg:flex-row'>

                    <div className='w-full lg:w-1/2'>
                        <h3 className="form3Header">TIME-HONORED CRAFTSMANSHIP</h3>
                        <p>Yasuragi Tea signifies tranquility and harmony of mind, body, and spirit. Our matcha is crafted using time-honoured Japanese techniques, offering a taste of invigorating freshness with each sip.</p>
                        <h3 className="form3Header">ORGANIC SELECTION</h3>
                        <p>Sourced from organic tea gardens, each leaf is carefully selected, shade-grown, and stone-ground to a fine powder, preserving its vibrant color and potent antioxidant properties. We believe in the power of purity, presenting our customers with a matcha that is as authentic and natural as possible.</p>
                        <h3 className="form3Header">THE JOURNEY OF A LEAF</h3>
                        <p>From the tea gardens to your cup, the journey of each Yasuragi tea leaf is marked with care, tradition, and a deep respect for nature. Each step of the process is designed to retain the leaf's natural goodness and provide you with a superior matcha experience.</p>
                    </div>

                    <div className='w-full lg:w-1/2 lg: ml-16'>
                        <img src={tradition} alt="Tradition" className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Story;