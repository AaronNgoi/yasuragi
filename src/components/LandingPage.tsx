import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import HeroBG1 from '../assets/site/HeroBG1.webp';
import HeroBG2 from '../assets/site/HeroBG2.webp';
import HeroBG3 from '../assets/site/HeroBG3.webp';
import '../styles/flickity.css';

const LandingPage: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (carouselRef.current) {
            new Flickity(carouselRef.current, {
                prevNextButtons: false,
                setGallerySize: false,
                adaptiveHeight: true,
                wrapAround: true,
                dragThreshold: 15,
                pauseAutoPlayOnHover: false,
                // autoPlay: 6000,
                imagesLoaded: true,
                cellSelector: '.carousel-cell',
            });
        }
    }, []);

    return (
        <div ref={carouselRef} className="carousel main-bg">
            <div className="carousel-cell">
                <img src={HeroBG1} alt="Bg Img 1" className='carouselImage'/>
                <div className='HeroText'>
                    <div className='HeroSubHeader'>Experience the Purest Tradition with Our Ceremonial Grade Matcha</div>
                    <div className='HeroHeader'>CEREMONIAL GRADE MATCHA</div>
                    <button className='HeroButton self-start'> DISCOVER MORE</button>
                </div>
            </div>
            <div className="carousel-cell">
                <img src={HeroBG2} alt="Bg Img 2" className='carouselImage'/>
                <div className='HeroText2'>
                    <div className='HeroSubHeader'>Indulge in the Wholesome Blend of Our Powdered Genmaicha</div>
                    <div className='HeroHeader'>POWDERED GENMAICHA</div>
                    <button className='HeroButton self-start'> DISCOVER MORE</button>
                </div>
            </div>
            <div className="carousel-cell">
                <img src={HeroBG3} alt="Bg Img 3" className='carouselImage'/>
                <div className='HeroText3'>
                    <div className='HeroSubHeader'>Experience the Warm, Toasty Delight of Our Powdered Houjicha</div>
                    <div className='HeroHeader'>POWDERED HOUJICHA</div>
                    <button className='HeroButtonEnd'> DISCOVER MORE</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;