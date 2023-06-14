import React from 'react';
import { ReactComponent as DownIcon } from '../assets/site/down.svg';

const ScrollToNewsButton: React.FC = () => {
    const scrollToNews = () => {
        const navbarHeight = 89; // Adjust the navbar height as needed
        const newsSectionOffset = document.getElementById('news-section')?.offsetTop;
        const scrollOffset = newsSectionOffset ? newsSectionOffset - navbarHeight : 0;

        window.scrollTo({
            top: scrollOffset,
            behavior: 'smooth',
        });
    };

    return (
        <div className="scroll-button-container">
        <button className="scroll-button bgOlive" onClick={scrollToNews}>
            <DownIcon className="down-icon h-5 w-5" />
        </button>
        </div>
    );
};

export default ScrollToNewsButton;
