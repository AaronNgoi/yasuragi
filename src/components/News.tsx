import React, {useState, useEffect, useRef} from 'react';

// Import images
import Elle from '../assets/site/elle.png';
import Tatler from '../assets/site/tatler.png';
import Vogue from '../assets/site/vogue.png';
import MarieClaire from '../assets/site/marieclaire.png';
import NaturalHealth from '../assets/site/naturalhealth.png';
import Flickity from 'flickity';
import '../styles/flickity.css';
import 'flickity-fade';


type NewsType = {
    src: string;
    alt: string;
};

const News: React.FC = () => {

    const carouselRef = useRef(null);
    const [pause, setPause] = useState(false);

    const newsData = [
        { src: Elle, alt: "Elle"},
        { src: Tatler, alt: "Tatler"},
        { src: NaturalHealth, alt: "Natural Health" },
        { src: Vogue, alt: "Vogue"},
        { src: MarieClaire, alt: "Marie Claire" },
    ];

    const [selectedNews, setSelectedNews] = useState<NewsType>(newsData[0]);

    const handleImageClick = (news: NewsType) => {
        setSelectedNews(news);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                setSelectedNews(prevState => {
                    const currentIndex = newsData.findIndex(news => news.alt === prevState.alt);
                    return newsData[(currentIndex + 1) % newsData.length];
                });
            }
        }, 4000);
        return () => clearInterval(interval); // Clean up on unmount
    }, [pause]);

    useEffect(() => {
        if (carouselRef.current) {
            new Flickity(carouselRef.current, {
                prevNextButtons: false,
                setGallerySize: false,
                adaptiveHeight: true,
                wrapAround: true,
                dragThreshold: 15,
                pauseAutoPlayOnHover: true,
                autoPlay: 6000,
                imagesLoaded: true,
                cellSelector: '.NewsImage',
                fade: true
            });
        }
    }, []);

    return (
        <div className='border-b news-section' id='news-section'>
            <div className="container mx-auto pt-12 pb-20  lg:pt-24 lg:pb-24">
            <div className="text-center text-xl py-4 lg:mb-8">YASURAGI IN THE NEWS</div>
            <div className="flex flex-row justify-around mobile-hidden tablet-hidden">
            {newsData.map((news, i) => (
                <img
                    src={news.src}
                    alt={news.alt}
                    className={`NewsImage ${news.alt === selectedNews.alt ? 'selected' : ''} transition-opacity duration-200`}
                    onClick={() => handleImageClick(news)}
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
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
