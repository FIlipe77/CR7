import React from 'react';
import "../App.css";
import { Footer, HeroSection, BoxSection } from '../components/index';


export const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <BoxSection />
            <Footer />
        </div>
    )
}
