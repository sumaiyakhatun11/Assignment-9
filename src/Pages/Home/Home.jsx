import React from 'react';
import Banner from '../../Components/Banner/Banner';
import PopularGame from '../../Components/PopularGame/PopularGame';
import Navbar from '../../Components/Navbar/Navbar';
import NewsletterSection from '../../Components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PopularGame></PopularGame>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;