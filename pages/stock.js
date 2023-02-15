import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default class Home extends React.Component{
    render(){
        try {
            ReactGA.pageview("Stock")
        } catch (error) {
            console.log(error)
        }
        return (
            <div>
                <Helmet>
                    <title>Normandie Camping-car - Notre stock</title>
                    <meta name="description" content="Choisissez la marque de camping car qui vous correspond et découvrez tous nos véhicules pour conduire confortablement . "/>
                </Helmet>
                <NavBar/>
                <Stock/>
                <Footer/>
            </div>
        )
    }
}