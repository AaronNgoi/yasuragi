import React, { useState } from 'react';
import tradition from '../assets/site/storyTradition.webp'
import packaging from '../assets/site/storyPackaging.webp'
import planet from '../assets/site/storyPlanet.webp'

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
        subText: "Matcha is our passion",
        mainText: "HONOURING TRADITION",
        paragraph: "Yasuragi Matcha stands for tranquility and the harmonious union of mind, body, and spirit. Our matcha is meticulously crafted using time-honoured Japanese techniques, offering a taste of invigorating freshness with each sip. Sourced from organic tea gardens, each leaf is carefully selected, shade-grown, and stone-ground to a fine powder, preserving its vibrant color and potent antioxidant properties.",
        src: tradition,
    },
    {
        name: "PACKAGING",
        subText: "Sustainable from leaf to package",
        mainText: "ECO-CONSCIOUS PACKAGING",
        paragraph: "Yasuragi Matcha is not only focused on delivering the highest quality of matcha but also takes responsibility for the environment. Our packaging is thoughtfully designed to reduce waste and ensure sustainability. We use eco-friendly, recyclable and biodegradable materials in our packaging, making sure our love for matcha extends to our love for the planet. Our commitment to sustainability reflects in every detail from leaf to package.",
        src: packaging
    },
    {
        name: "PLANET",
        subText: "Our commitment to Earth",
        mainText: "CARBON NEUTRAL AND BEYOND",
        paragraph: "At Yasuragi Matcha, we are driven by the pursuit of harmony - with our bodies, our minds, our spirit, and with our planet. We understand the importance of taking care of our environment and are committed to reducing our carbon footprint. All our deliveries are carbon neutral, as we consistently strive for more sustainable practices in all our processes. We are also active in efforts to offset our carbon emissions, thus contributing positively to the environment. Our ultimate goal is to achieve a balance where we give back to the Earth just as much as we take, ensuring a sustainable future for all.",
        src: planet
    },
];
const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState(aboutData[0].name); // default to the first tab

    const renderContent = () => {
        const activeData = aboutData.find(tab => tab.name === activeTab);

        return (
            <div className="AboutContentWrapper flex flex-row">
                <div className="flex flex-row justify-end">
                    <div className='AboutImageWrapper'>
                    <img src={activeData?.src} alt={activeData?.name} />
                    </div>
                </div>
                <div className="AboutTextBlock p-6 h-full ">
                    <h3 className="text-lg">{activeData?.subText}</h3>
                    <h1 className="text-2xl font-bold AboutMainText AboutGreen">{activeData?.mainText}</h1>
                    <p>{activeData?.paragraph}</p>
                    <p className="AboutGreen">Discover More</p>
                </div>
            </div>
        )
    }


    const renderTabs = () => {
        return aboutData.map((tab) => {
            return (
                <div onClick={() => setActiveTab(tab.name)} className={`px-4 py-2 font-bold ${activeTab === tab.name ? 'ActiveAboutTab' : 'PassiveAboutTab'}`}>
                    {tab.name}
                </div>
            )
        });
    }

    return (
        <div className="AboutBlock lg:py-24 w-full">
            {renderContent()}
            <div className="flex flex-row justify-center mb-6 items-center ">
                {renderTabs()}
            </div>
        </div>
    );
}

export default About;
