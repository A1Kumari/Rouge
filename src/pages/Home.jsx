import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import HomeContent from '../components/HomeContent';
import Process from '../components/Process';
import Hero from '../img/hero1.png';
import img2 from '../img/gifs (2).svg';

function HomePage() {
    return (
        <>
            <Navbar />
            <section className="py-5">
                <HomeContent />
                <Features />
                <Process />
                
                <Footer />
            </section>

           
           
        </>
    );
}

export default HomePage;
