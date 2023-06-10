import React, {useEffect, useState} from 'react';
import tradition from '../assets/site/storyTradition.webp'
import packaging from '../assets/site/storyPackaging.webp'
import planet from '../assets/site/storyPlanet.webp'
import WOW from 'wowjs';



type AboutType = {
    name: string,
    subText: string,
    mainText: string,
    paragraph: string,
    src: string
}

const aboutData: AboutType[] = [
    {
        name: "STORY",
        subText: "Embrace the Tradition",
        mainText: "TIME-HONORED CRAFTSMANSHIP",
        paragraph: "Yasuragi Tea signifies tranquility and harmony of mind, body, and spirit. Our matcha is crafted using time-honoured Japanese techniques, offering a taste of invigorating freshness with each sip. Sourced from organic tea gardens, each leaf is carefully selected, shade-grown, and stone-ground to a fine powder, preserving its vibrant color and potent antioxidant properties.",
        src: tradition,
    },
    {
        name: "PACKAGING",
        subText: "Responsibly Sourced",
        mainText: "ECO-CONSCIOUS PACKAGING",
        paragraph: "Yasuragi Tea delivers top-tier matcha with environmental responsibility in mind. Our packaging minimizes waste, employing eco-friendly, recyclable and biodegradable materials. Our respect for the planet shines through our commitment to sustainability, evident in every step from leaf to package.",
        src: packaging
    },
    {
        name: "PLANET",
        subText: "Drink Green",
        mainText: "OUR PLANET, OUR MATCHA",
        paragraph: "At Yasuragi Tea, we seek harmony with ourselves and the planet. We're dedicated to reducing our carbon footprint, offering only carbon-neutral deliveries and actively offsetting our emissions. Our aim is not just to minimize our environmental impact, but to create a sustainable future where we give back to the Earth as much as we receive.",
        src: planet
    },
];
const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState(aboutData[0].name); // default to the first tab
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    const handleTabChange = (name: string) => {
        setAnimate(true); // trigger animation
        setActiveTab(name);
    };

    const renderContent = () => {
        const activeData = aboutData.find(tab => tab.name === activeTab);


        return (
            <>
                {/*desktop*/}
            <div className="AboutContentWrapper wow focusIn mobile-hidden tablet-hidden mb-10 lg:mb-16 flex flex-row justify-end items-end h-full">
                <div className="flex h-full ">
                    <div className='AboutImageWrapper h-full'>
                    <img className={`AboutImage h-full  ${animate ? 'slowFocusIn' : ''}`} src={activeData?.src} alt={activeData?.name} />
                    </div>
                </div>
                <div className={`AboutTextBlock mobile-hidden tablet-hidden p-6 lg:p-11 h-full ${animate ? 'riseUp' : ''}`} onAnimationEnd={() => setAnimate(false)}>

                <h3 className=" font-bold uppercase tracking-widest py-1 mb-3">{activeData?.subText}</h3>
                    <h1 className=" font-bold AboutMainText AboutGreen py-1 mb-3">{activeData?.mainText}</h1>
                    <p className='mb-6'>  {activeData?.paragraph}</p>
                    <p className="AboutGreen underline font-bold ">Discover More</p>
                </div>
            </div>

                {/*mobile*/}
        <div className="flex h-full desktop-hidden mobileAbout">
            <div
                className={`AboutTextBlock flex m-auto p-6 lg:p-11 h-full ${animate ? 'focusIn' : ''}`}
                onAnimationEnd={() => setAnimate(false)}
            >
                <div className='mobileTextWrapper items-center text-center justify-center wow'>
                <h3 className="font-bold uppercase tracking-widest py-1 mb-3">{activeData?.subText}</h3>
                <h1 className="font-bold AboutMainText AboutGreen py-1 mb-3">{activeData?.mainText}</h1>
                <p className="mb-6">{activeData?.paragraph}</p>
                <p className="AboutGreen underline font-bold">Discover More</p>
                </div>
            </div>
            <div className="wow  AboutBgWrapper" style={{ backgroundImage: `url(${activeData?.src})` }}>
                <div className="Overlay"></div>
            </div>
        </div>
        </>
        )
    }


    const renderTabs = () => {
        return aboutData.map((tab) => {
            return (
                <div
                    key={tab.name}
                    onClick={() => handleTabChange(tab.name)}
                    className={`py-2 h-12 flex flex-row items-center justify-center font-bold ${activeTab === tab.name ? 'ActiveAboutTab' : 'PassiveAboutTab'}`}
                >
                    {tab.name}
                </div>
            )
        });
    }

    return (
        <div className="AboutBlock lg:pt-24 lg:pb-12 w-full">
            {renderContent()}
            <div className="flex flex-row justify-center mt-4 mb-4 lg:mb-6 items-center overflow-hidden">
                {renderTabs()}
            </div>
        </div>
    );
}

export default About;
