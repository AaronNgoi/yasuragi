import React, {useState, useEffect, useRef} from 'react';
import Organic from '../assets/site/1organic.png';
import Carbon from '../assets/site/2carbon.webp';
import Packaging from '../assets/site/3packaging.png';
import Recycle from '../assets/site/4recycle.png';
import Flickity from 'flickity';
import '../styles/flickity.css';
import 'flickity-fade';

interface FlickityInstance extends Flickity {
    selectedIndex: number;
    off: (eventName: string, listener?: (...args: any[]) => void) => void;
    destroy: () => void;
}

const Benefits: React.FC = () => {

    type BenefitType = {
        src: string,
        alt: string,
        mainText: string,
        subText: string,
    };

    const carouselRef = useRef(null);
    const flickityRef = useRef<FlickityInstance | null>(null);
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
    const isMobile = () => window.innerWidth <= 1024;

    useEffect(() => {
        // Only set interval for non-mobile devices
        if (!isMobile()) {
            const interval = setInterval(() => {
                if (!pause) {
                    setSelectedBenefit(prevState => {
                        const currentIndex = benefitsData.findIndex(benefits => benefits.alt === prevState.alt);
                        return benefitsData[(currentIndex + 1) % benefitsData.length];
                    });
                }
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [pause]);

    useEffect(() => {
        if (carouselRef.current) {
                flickityRef.current = new Flickity(carouselRef.current, {
                prevNextButtons: false,
                setGallerySize: false,
                adaptiveHeight: true,
                wrapAround: true,
                dragThreshold: 15,
                pauseAutoPlayOnHover: true,
                // autoPlay: 4000,
                imagesLoaded: true,
                cellSelector: '.NewsImage',
                    fade: true,
                }) as FlickityInstance;

            if (flickityRef.current) {
                flickityRef.current.on('settle', () => {
                    setSelectedBenefit(benefitsData[flickityRef.current?.selectedIndex || 0]);
                });
            }

            return () => {
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
        <div className='border-b border-t darkerbg w-full'>
            <>
            <div className="container mx-auto pt-12 pb-20 lg:pt-20 lg:pb-20 mobile-hidden tablet-hidden">
                <div className='benefitsText' key={selectedBenefit.mainText}>
                <div className="text-center font-bold text-2xl py-4 darkBrownFont">
                    {selectedBenefit.mainText}
                </div>
                <div className="text-center text-2xl py-4 lg:mb-20">

                    {selectedBenefit.subText}
                </div>
                </div>
                <div>
                <div className="pl-16 pr-16 flex flex-row justify-around ">
                    {benefitsData.map((benefit, i) => (
                        <img
                            key={i}
                            className={`carousel-cell BenefitsImage ${benefit.alt === selectedBenefit.alt ? 'selected' : ''}`}
                            src={benefit.src}
                            alt={benefit.alt}
                            onClick={() => handleImageClick(benefit)}
                            onMouseEnter={() => setPause(true)}
                            onMouseLeave={() => setPause(false)}
                        />
                    ))}
                </div>
                </div>
            </div>



                <div className="container mx-auto pt-12 pb-20 lg:pt-24 lg:pb-24 desktop-hidden ">
                    <div>
                    </div>
                    {/*Carousel*/}
                    <div className='BenefitsWrapper desktop-hidden'>
                        <div className="relative items-center">
                            <div className="carousel benefits" ref={carouselRef}>
                                {benefitsData.map((benefits, i) => (
                                    <div className='carousel-cell NewsImage'>
                                    <img
                                        key={i}
                                        className="carouselImage"
                                        src={benefits.src}
                                        alt={benefits.alt}
                                    />
                                        <div className='carouselText'>
                                            <div className="darkBrownFont">
                                                {benefits.mainText}
                                            </div>
                                            <div className="">

                                                {benefits.subText}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Benefits;
