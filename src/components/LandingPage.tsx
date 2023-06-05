import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import HeroBG1 from '../assets/site/HeroBG1.webp';
import HeroBG2 from '../assets/site/HeroBG2.webp';
import HeroBG3 from '../assets/site/HeroBG3.webp';
// import '../styles/flickity.css';

const LandingPage: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (carouselRef.current) {
            new Flickity(carouselRef.current, {
                prevNextButtons: false,
                // setGallerySize: false,
                adaptiveHeight: false,
                wrapAround: true,
                dragThreshold: 15,
                pauseAutoPlayOnHover: false,
                autoPlay: 6000,
                imagesLoaded: true
            });
        }
    }, []);

    return (
        <div ref={carouselRef} className="carousel">
            <div className="carousel-cell">
                <img src={HeroBG1} alt="Image 1" className='carouselImage'/>
            </div>
            <div className="carousel-cell">
                <img src={HeroBG2} alt="Image 2" className='carouselImage'/>
            </div>
            <div className="carousel-cell">
                <img src={HeroBG3} alt="Image 3" className='carouselImage'/>
            </div>
        </div>
    );
};

export default LandingPage;