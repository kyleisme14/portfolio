import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import AboutMeCards from '../AboutMeCards';
import HeroSection from '../HeroSection';


function Home () {
    return (
        <>
            <HeroSection />
            <AboutMeCards />
            <Cards />
        </>
    );
}

export default Home;