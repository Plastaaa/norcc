import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import CampingCarClassique from '../../components/guide/campingcarguide'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Guide camping car");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - Guide d'achat camping car</title>
                <meta name="description" content="Le guide d'achat du camping-car, intégral, profilé, capucine soyez sûr de ce qui vous convient le mieux !"/>
            </Helmet>
            <NavBar/>
            <CampingCarClassique/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}