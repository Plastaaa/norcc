import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import PdsLourd from '../../components/guide/pdslourd'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Guide poids lourd");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - Guide d'achat poids lourd</title>
                <meta name="description" content="Le guide d'achat du camping-car poids lourd, ne passez pas à côté d'informations cruciales."/>
            </Helmet>
            <NavBar/>
            <PdsLourd/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}