import { useEffect } from "react";
import HomePage from "../components/home"
import React from "react"
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

export default class Home extends React.Component{

    render(){
      return (
        <div>
          {
            ReactGA.pageview("Accueil")
          }
          <Helmet>
            <title>Normandie Camping-car</title>
            <meta name="description" content="Découvrez tous nos véhicules neufs et d'occasions. Plusieurs modèles vous sont proposés afin que vous trouviez la marque qui vous correspond !  "/>
          </Helmet>
          <HomePage/>
        </div>
      )
    }
}
