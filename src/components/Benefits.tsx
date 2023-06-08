import React, {useState, useEffect, useRef} from 'react';
import Organic from '../assets/site/1organic.png';
import Carbon from '../assets/site/2carbon.webp';
import Packaging from '../assets/site/3packaging.png';
import Recycle from '../assets/site/4recycle.png';
import Flickity from 'flickity';
import '../styles/flickity.css';

const Benefits: React.FC = () => {

    type BenefitType = {
        src: string,
        alt: string,
        mainText: string,
        subText: string,
    };

    const carouselRef = useRef(null);
    const flickityRef = useRef(null);
    const [pause, setPause] = useState(false);

    const benefitsData: BenefitType[]  = [
        {
            src: Organic,
            alt: "Organic",
            mainText: "100% ORGANIC",
            subText: "Premium quality organic tea"
        },
        {
            src: Carbon,
            alt: "Carbon",
            mainText: "CARBON NEUTRAL",
            subText: "Committed to sustainability"
        },
        {
            src: Packaging,
            alt: "Packaging",
            mainText: "ECO-FRIENDLY PACKAGING",
            subText: "Recyclable and biodegradable"
        },
        {
            src: Recycle,
            alt: "Recycle",
            mainText: "RECYCLE READY",
            subText: "Reducing waste together"
        },
    ];

    const [selectedBenefit, setSelectedBenefit] = useState(benefitsData[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                setSelectedBenefit(prevState => {
                    const currentIndex = benefitsData.findIndex(benefits => benefits.alt === prevState.alt);
                    return benefitsData[(currentIndex + 1) % benefitsData.length];
                });
            }
        }, 4000);
        return () => clearInterval(interval);
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
                autoPlay: 4000,
                imagesLoaded: true,
                cellSelector: '.NewsImage',
            });

            if (flickityRef.current) {
                flickityRef.current.on('settle', () => {
                    setSelectedBenefit(benefitsData[flickityRef.current?.selectedIndex]);
                });
            }

            return () => {
                // Unbind Flickity events
                if (flickityRef.current) {
                    flickityRef.current.off('settle');
                    flickityRef.current.destroy();
                }
            }
        }
    }, []);

    const handleImageClick = (benefit: BenefitType) => {
        setSelectedBenefit(benefit);
    };

    return (
        <div className='border-b darkerbg'>
            <div className="container mx-auto pt-12 pb-20 lg:pt-24 lg:pb-24">
                <div className="text-center font-bold text-2xl py-4">
                    {selectedBenefit.mainText}
                </div>
                <div className="text-center text-2xl py-4 lg:mb-20">

                    {selectedBenefit.subText}
                </div>
                <div className="pl-16 pr-16 flex flex-row justify-around mobile-hidden tablet-hidden">
                    {benefitsData.map((benefit, i) => (
                        <img
                            key={i}
                            className="carousel-cell NewsImage"
                            src={benefit.src}
                            alt={benefit.alt}
                            onClick={() => handleImageClick(benefit)}
                            onMouseEnter={() => setPause(true)}
                            onMouseLeave={() => setPause(false)}
                        />
                    ))}
                </div>
                {/*Carousel*/}
                <div className='BrandWrapper desktop-hidden'>
                    <div className="relative items-center">
                        <div className="carousel news-testimonial" ref={carouselRef}>
                            {benefitsData.map((benefits, i) => (
                                <img
                                    key={i}
                                    className="carousel-cell NewsImage"
                                    src={benefits.src}
                                    alt={benefits.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
