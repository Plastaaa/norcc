import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ML from '../components/mentionslegales'
import Confidentialite from '../components/confidentialite'
import Cookies from '../components/cookies'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Mentions Legales");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie Camping-car - Mentions légales</title>
            </Helmet>
            
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <ML/>
            </div>
            <div>
                <Confidentialite/>
            </div>
            <div>
                <Cookies/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}