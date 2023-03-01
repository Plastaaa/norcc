import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FoireCaen from '../../components/article/foirecaen23';
import {Helmet} from "react-helmet";

export default function Home(){
    useEffect (() => {ReactGA.pageview("Foire Expo Caen");}, []);
    return (
        <div>
            <Helmet>
                <title>Normandie camping car - Foire Expo Caen</title>
                <meta name="description" content="Normandie camping car vous propose de découvrir, la foire de caen sous un nouveau jour. Du 2 au 5 mars 2023."/>
            </Helmet>
            <div>
            {
                <NavBar/>
            }
            </div>
            <div>
                <FoireCaen/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}