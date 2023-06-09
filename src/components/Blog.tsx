import React from 'react';
import blogTranquility from '../assets/site/blogTranquility.webp';
import blogBreath from '../assets/site/blogBreath.webp';
import blogMeditation from '../assets/site/blogMeditation.webp';

type BlogType = {
    src: string;
    title: string;
    author: string;
    description: string;
};

const blogData: BlogType[] = [
    {
        src: blogMeditation,
        title: "THE MAGIC OF MATCHA MEDITATION",
        author: "Hiroshi Saito, Tea Master and Zen Practitioner",
        description: "Immersing oneself in the preparation and consumption of Matcha is a meditation in itself, a serene journey akin to the soothing flow of a calm river...",
    },
    {
        src: blogBreath,
        title: "THE BREATH OF LIFE: ZEN AND THE MATCHA RITUAL",
        author: "Hiroshi Saito, Tea Master and Zen Practitioner",
        description: "The disciplined rhythm of Zen breathing aligns perfectly with the ceremonial preparation of Matcha, invigorating the spirit and awakening the life force within...",
    },
    {
        src: blogTranquility,
        title: "TRANQUILITY THROUGH TEA: THE YASURAGI WAY",
        author: "Yumiko Tanaka, Japanese Tea Ceremony Expert",
        description: "Experiencing true tranquility requires harmony of the physical, mental, and spiritual elements, a balance effortlessly achieved through the artful indulgence in Yasuragi Matcha...",
    },
];

const Blog: React.FC = () => {
    return (
        <div className='flex flex-col py-24 items-center w-full'>
            <div className='blogWrapper items-center'>
            <div className='mb-16 text-2xl font-bold text-center tracking-widest darkBrownFont'>BLOG</div>
        <div className="flex flex-col lg:flex-row justify-around">
            {blogData.map((blog, i) => (
                <div key={i} className="flex flex-col mb-8 blogUnit items-start">
                    <div className="imageWrapper">
                        <img src={blog.src} alt={blog.title} className="blogImage"/>
                    </div>
                    <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
                    <p className="text-sm mt-1 text-gray-600 blogAuthor">{blog.author}</p>
                    <p className="mt-2">{blog.description}</p>
                    <button className="mt-2 clickMore">Read more</button>
                </div>
            ))}
        </div>
                <button className="HeroButton mt-8">VIEW ALL ARTICLES</button>
            </div>
        </div>
    );
};

export default Blog;
