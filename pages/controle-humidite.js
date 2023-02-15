import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import ControleHumidite from '../components/humidite'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Controle d'humidité");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - Contrôle d'humidité</title>
                <meta name="description" content="Prenez contact avec notre équipe, afin de parler de votre contrôle d'humidité."/>
            </Helmet>
            <NavBar/>
            <ControleHumidite/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}