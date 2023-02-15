import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Marques from '../components/nosMarques'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { MetaTags } from 'react-meta-tags';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Marques");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - Marques ditribuées</title>
                <meta name="description" content="DG8 camping-car à su depuis sa création se créer un réseaux, plus de quarante marques lui font confiance. Découvrez toutes nos marques partenaires. "/>
            </Helmet>
            
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Marques/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}