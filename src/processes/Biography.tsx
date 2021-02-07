import React from 'react'
import "../App.css"
import { Cards } from '../components/Cards'
import { Footer } from '../components/footer/Footer';

export const Biography: React.FC = () => {
    return (
        <>
            <h1 className="biography">
            Biography
        </h1>
            <Cards />
            <Footer />
        </>
    )
}
