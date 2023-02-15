import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import VanEtFourgon from '../../components/guide/vanetfourgon'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Guide Van et Fourgon");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - Guide d'achat Van et Fourgon</title>
                <meta name="description" content="Le guide d'achat du van et du fourgon, toit relevable, 4x4 baroudeurs, soyez sûr de ce qui vous convient le mieux !"/>
            </Helmet>
            <NavBar/>
            <VanEtFourgon/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}