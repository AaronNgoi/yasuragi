import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-28 newsletterBg">
            <h2 className="text-sm mb-4">KEEP UPDATED</h2>
            <h2 className="text-2xl font-bold text-center tracking-widest mb-4 darkBrownFont">NEWSLETTER</h2>
            <p className="text-lg text-center mb-12 px-6 mx-auto">Provide your email to get exclusive updates on our new tea collections, accessories, and much more.</p>

            <div className="flex flex-row justify-center px-6 w-full max-w-xl">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-md px-4 py-2 mr-4 bg-transparent inputBox w-full focus:outline-none focus:shadow-outline"
                />
                <div className='w-32'>
                <button className="HeroButton">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
