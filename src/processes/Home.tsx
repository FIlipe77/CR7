import React from 'react';
import "../App.css";
import { Cards } from '../components/Cards';
import { Footer } from '../components/footer/Footer';
import { HeroSection } from "../components/HeroSection";


export const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}
