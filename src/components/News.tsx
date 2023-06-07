import React, {useState, useEffect, useRef} from 'react';

// Import images
import Elle from '../assets/site/elle.png';
import Tatler from '../assets/site/tatler.png';
import Vogue from '../assets/site/vogue.png';
import MarieClaire from '../assets/site/marieclaire.png';
import NaturalHealth from '../assets/site/naturalhealth.png';
import Flickity from 'flickity';
import '../styles/flickity.css';

const News: React.FC = () => {

    const carouselRef = useRef(null);

    const newsData = [
        { src: Elle, alt: "Elle"},
        { src: Tatler, alt: "Tatler"},
        { src: NaturalHealth, alt: "Natural Health" },
        { src: Vogue, alt: "Vogue"},
        { src: MarieClaire, alt: "Marie Claire" },
    ];

    const [selectedNews, setSelectedNews] = useState(newsData[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedNews(prevState => {
                const currentIndex = newsData.findIndex(news => news.alt === prevState.alt);
                return newsData[(currentIndex + 1) % newsData.length];
            });
        }, 4000);
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

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
                cellSelector: '.NewsImage',
            });
        }
    }, []);

    return (
        <div className='border-b'>
            <div className="container mx-auto pt-12 pb-20  lg:pt-24 lg:pb-24">
            <div className="text-center text-xl py-4 lg:mb-8">YASURAGI IN THE NEWS</div>
            <div className="flex flex-row justify-around mobile-hidden tablet-hidden">
            {newsData.map((news, i) => (
                <img
                    src={news.src}
                    alt={news.alt}
                    className={`NewsImage ${news.alt === selectedNews.alt ? 'selected' : ''} transition-opacity duration-200`}
                />
            ))}
        </div>
            {/*Carousel*/}
            <div className='BrandWrapper desktop-hidden'>
                <div className="relative items-center">
                <div className="carousel news-testimonial" ref={carouselRef}>
                    {newsData.map((news, i) => (
                        <img
                            key={i}
                            className="carousel-cell NewsImage"
                            src={news.src}
                            alt={news.alt}
                        />
                    ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default News;
