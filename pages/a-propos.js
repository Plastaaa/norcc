import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Groupe from '../components/groupe';
import {Helmet} from "react-helmet";


export default function Home(){
    useEffect (() => {ReactGA.pageview("A-propos");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - A propos</title>
                <meta name="description" content="Normandie Camping-car vous propose différents services, tels que la vente de véhicules, d'accessoires, la mise en location ainsi qu'un atelier de professionnel."/>
            </Helmet>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Groupe/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}