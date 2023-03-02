import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Concessions from '../components/concessions'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Nos Concessions");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping Car - Nos concessions</title>
                <meta name="description" content="Découvrez nos différentes concessions, plus d'une dizaines situées de la frontière Suisse jusqu'à Caen. Contactez nous pour plus d'informations. "/>
            </Helmet>
            <div>
                {
                <NavBar/>
                }
            </div>
            <div className='pt-10'>
                <Concessions/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}