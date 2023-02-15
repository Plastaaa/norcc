import NavBar from '../components/navbar'
import Footer from '../components/footer'
import RDVAtelier from "../components/rdvAtelier"
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("RDV Atelier");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - RDV Atelier</title>
                <meta name="description" content="Pour prendre soins de votre véhicules, prenez rendez-vous avec notre atelier, expert dans le domaine des campings-cars, vans et fourgons. "/>
            </Helmet>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className='pt-10'>
                <RDVAtelier/>
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}