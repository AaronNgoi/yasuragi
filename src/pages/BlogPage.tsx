import React from 'react';
import Footer from "../components/Footer";

type BlogPost = {
    title: string;
    author: string;
    date: string;
    summary: string;
};

const blogPosts: BlogPost[] = [
    {
        title: "The Magic of Matcha Meditation",
        author: "Hiroshi Saito, Tea Master and Zen Practitioner",
        date: "June 1, 2023",
        summary: "Immersing oneself in the preparation and consumption of Matcha is a meditation in itself, a serene journey akin to the soothing flow of a calm river...",
    },
    {
        title: "The Breath of Life: Zen and the Matcha Ritual",
        author: "Hiroshi Saito, Tea Master and Zen Practitioner",
        date: "May 25, 2023",
        summary: "The disciplined rhythm of Zen breathing aligns perfectly with the ceremonial preparation of Matcha, invigorating the spirit and awakening the life force within...",
    },
    {
        title: "Tranquility through Tea: The Yasuragi Way",
        author: "Yumiko Tanaka, Japanese Tea Ceremony Expert",
        date: "May 15, 2023",
        summary: "Experiencing true tranquility requires harmony of the physical, mental, and spiritual elements, a balance effortlessly achieved through the artful indulgence in Yasuragi Matcha...",
    },
    {
        title: "Matcha and Mindfulness: A Perfect Brew",
        author: "Takashi Yamada, Tea Master and Mindfulness Coach",
        date: "May 5, 2023",
        summary: "Discover the synergies between mindfulness practices and the art of preparing and savoring Matcha, a combination that enriches the soul and energizes the mind...",
    },
    {
        title: "The Path to Inner Peace: Matcha and Meditation",
        author: "Naoko Suzuki, Zen Master and Tea Practitioner",
        date: "April 28, 2023",
        summary: "Explore the timeless wisdom of Zen as we delve into the meditative experience of preparing and consuming Matcha...",
    },
    {
        title: "Embracing Simplicity: The Philosophy of Tea",
        author: "Kazuki Mori, Tea Philosopher and Historian",
        date: "April 20, 2023",
        summary: "Unveiling the intricate philosophy of tea, a simple yet profound way to seek beauty in simplicity and tranquility in the mundane...",
    },
    {
        title: "A Journey of the Senses: The Aesthetics of Tea",
        author: "Reiko Kobayashi, Tea Ceremony Expert and Aesthetics Scholar",
        date: "April 13, 2023",
        summary: "Venture into the aesthetic world of tea, an art form that engages all senses and enchants the mind with its subtleties...",
    },
    {
        title: "Mindful Matcha: The Art of Presence",
        author: "Kenshin Ito, Zen Practitioner and Tea Master",
        date: "April 6, 2023",
        summary: "Unearth the joys of being present as we walk you through the practice of mindfulness in the art of Matcha...",
    },
    {
        title: "Tea and Time: An Exploration of Slow Living",
        author: "Yui Watanabe, Slow Living Advocate and Tea Expert",
        date: "March 30, 2023",
        summary: "Join us as we delve into the concept of slow living, exemplified beautifully in the mindful preparation and enjoyment of tea...",
    },

];

const BlogPage: React.FC = () => {
    return (
        <>
            <div className="navPadding">
                <div className="pageHeader border-b border-t">
                    <h1 className="form1Header">BLOG</h1>
                </div>
                <div className='formComponent'>
                    {blogPosts.map((post, index) => (
                        <div key={index}>
                            <h2 className="form3Header">{post.title}</h2>
                            <h3>{post.author}</h3>
                            <p>{post.date}</p>
                            <p>{post.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default BlogPage;
