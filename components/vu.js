import React from 'react'
import axios from 'axios'
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardCC from './cardCC';
import SlideMarc from './slideMarc';
import Contact from '../components/contactVU'
import MapBis from '../components/mapBis'
import Image from 'next/image';
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import {Helmet} from "react-helmet";
import Cookies from 'universal-cookie';

function IsThereHeight(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoHauteur/>
    }
    return <Hauteur isSet={isSet}/>
}
function NoHauteur(props){
    return <p></p>
}
function Hauteur(props){
    const isSet = props.isSet;
    return  (
        <div>
            <p>Hauteur : {props.isSet} m</p>
        </div>
    );
}

function IsThereWidth(props){
    const isSet= props.isSet;
    if(isSet == ""){
        return <NoLargeur/>
    }
    return <Largeur isSet={isSet}/>
}
function NoLargeur(props){
    return <p></p>
}
function Largeur(props){
    const isSet = props.isSet;
    return  "Largeur : " + props.isSet + " m"
}

function IsThereLenght(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoLongueur/>
    }
    return <Longueur isSet={isSet}/>
}
function NoLongueur(props){
    return <p></p>
}
function Longueur(props){
    const isSet = props.isSet;
    return  "Longueur : " + props.isSet + " m"
}

function IsThereYear(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoYear/>
    }
    return <Year isSet={isSet}/>
}
function NoYear(props){
    return <p></p>
}
function Year(props){
    const isSet = props.isSet;
    return  "Année : " + props.isSet
}

function IsThereRef(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoRef/>
    }
    return <Ref isSet={isSet}/>
}
function NoRef(props){
    return <p></p>
}
function Ref(props){
    const isSet = props.isSet;
    return  "Réference du véhicule : " + props.isSet
}

function IsThereType(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoType/>
    }
    return <Type isSet={isSet}/>
}
function NoType(props){
    return <p></p>
}
function Type(props){
    const isSet = props.isSet;
    return  "Type de véhicule : " + props.isSet
}

function IsThereModel(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoModel/>
    }
    return <Model isSet={isSet}/>
}
function NoModel(props){
    return <p></p>
}
function Model(props){
    const isSet = props.isSet;
    return  "Modèle : " + props.isSet
}

function IsThereConcess(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoConcess/>
    }
    return <Concess isSet={isSet}/>
}
function NoConcess(props){
    return <p></p>
}
function Concess(props){
    const isSet = props.isSet;
    return  "Concession : " + props.isSet
}

function IsThereMileage(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoMileage/>
    }
    return <Mileage isSet={isSet}/>
}
function NoMileage(props){
    return <p></p>
}
function Mileage(props){
    const isSet = props.isSet;
    return  "Kilométrage : " + props.isSet + " km"
}

function IsThereBed(props){
    const isSet = props.isSet;
    if(isSet == ""){
        return <NoBed/>
    }
    return <Bed isSet={isSet}/>
}
function NoBed(props){
    return <p></p>
}
function Bed(props){
    const isSet = props.isSet;
    return  "Type de lit : " + props.isSet + "."
}

function NbCouchage(props){
    const couchage = props.couchage;
    if(couchage == "" || couchage == undefined){
        return(
            <li></li>
        )
    }else{
        return(
            <li>
                <p className='text-gray-400'>
                    Nombre de couchages
                </p>
                <p className='text-gray-800 dark:text-white px-2'>
                    {props.couchage}
                </p>
            </li>
        )
    }
}

export default class VehiculeUnique extends React.Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCDetailById.php?id=${window.location.pathname.split('/')[2]}&concess=12`)
          .then(res => {
            const campingcar = res.data;
            this.setState({ campingcar });
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllVisualsByCC.php?id=${window.location.pathname.split('/')[2]}&concess=12`)
          .then(res => {
            const imgCC = res.data;
            this.setState({ imgCC });
        })
        
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllEquipByCC.php?id=${window.location.pathname.split('/')[2]}&concess=12`)
          .then(res => {
            const equips = res.data;
            this.setState({ equips });
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/get2CCSimi.php?id=${window.location.pathname.split('/')[2]}&concess=12`)
          .then(res => {
            const ccsSimi = res.data;
            this.setState({ ccsSimi });
        })
    }

    state = {
        campingcar: [],
        imgCC: [],
        equips: [],
        ccsSimi: [],
        show: false,
    }

    showModal = e => {
        if(this.state.show){
            this.setState({
                show: false
            });
        }else{
            this.setState({
                show: true
            });
        }        
    };

    render() {
        const cookie = new Cookies;
        var idUser = cookie.get('logId');

        if(this.state.show == true){
            return (
                <div className='px-8 md:px-16 lg:px-32'>
                    <Splide
                        options={{
                            type: "loop",
                            autoplay: false,
                            heightRatio: 0.70,
                            keyboard: true,
                            drag: false,
                            }}
                        >
                            {
                                this.state.imgCC.map((img) => (
                                        <SplideSlide className={"rounded-xl"}>
                                            <a onClick={e => {this.showModal();}}>
                                                {
                                                    <Image src={img.linkIMG} objectFit={"contain"} alt={"image camping car"} layout={"fill"}/>
                                                }
                                            </a>
                                        </SplideSlide>
                                ))
                            }
                    </Splide>
                </div>
            )
        }
        return (
            <div>
                <div>
                {
                    <NavBar/>
                }
                </div>
            {
            this.state.campingcar.map((cc) => (
                
                <div>
                    <Helmet>
                        <title>Normandie Camping-car - {cc.marque + " " + cc.modele + " " + cc.version}</title>
                    </Helmet>
                    <div className="text-sm breadcrumbs w-full 2xl:px-16 md:px-6 px-4">
                        <ul>
                            <li><a href='/'>Accueil</a></li> 
                            <li><a href={"/stock?etat="+cc.typeVehicule+"&page=1"}>{cc.typeVehicule}</a></li> 
                            <li>{cc.marque + " " + cc.modele + " " + cc.version}</li>
                        </ul>
                    </div>
                <div className="md:flex items-start justify-center 2xl:px-16 md:px-6 px-4">
                    <div className="md:w-3/6 xl:w-3/6 lg:w-3/5 md:block">
                        {
                            <Splide
                                options={{
                                    type: "loop",
                                    autoplay: true,
                                    heightRatio: 0.7,
                                    lazyLoad: false,
                                    }}
                                >
                                    {
                                        this.state.imgCC.map((img) => (
                                                <SplideSlide>
                                                    <a onClick={e => {this.showModal();}}>
                                                        <Image className={"rounded-xl"} src={img.linkIMG} objectFit={"cover"} alt={"Image camping car"} layout={"fill"}/>
                                                    </a>
                                                </SplideSlide>
                                        ))
                                    }
                            </Splide>
                        }
                        <div className="md:w-3/6 xl:w-3/6 lg:w-3/5 md:block">
                            
                        </div>
                    </div>
                    <div className="xl:w-2/5 md:w-2/5 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <div className="border-b border-gray-200 pb-6">
                            <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{cc.famille}</p>
                            <div className='pb-4'>
                                <h1 className="pb-4 border-b lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2 dark:text-white">
                                    {cc.marque + " " + cc.modele + " " + cc.version}
                                </h1>
                            </div>
                        </div>
                        <div>
                            <p className="text-base leading-4 mt-7">
                                <IsThereRef isSet={cc.idCC}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereConcess isSet={cc.libelle}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereType isSet={cc.gamme}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereModel isSet={cc.modele}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereMileage isSet={cc.kilometrage}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereYear isSet={cc.annee}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereLenght isSet={cc.longueur}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereWidth isSet={cc.largeur}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereHeight isSet={cc.hauteur}/>
                            </p>
                            <p className="text-base leading-4 mt-4">
                                <IsThereBed isSet={cc.typeLit}/>
                            </p>
                        </div>
                        <div>
                            <div className="border-t flex flex-wrap border-b py-4 mt-7 border-gray-200">
                                <div className='w-1/2 px-4'>
                                    <button className="bg-green-700 hover:bg-greenHov text-white w-full font-bold py-2 px-4 rounded-lg">
                                        {
                                            Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(cc.prixTTC)
                                        }
                                    </button>
                                </div>
                                <div className='w-1/2 px-4'>
                                    <div className='w-full bg-green-700 hover:bg-green-800 text-white w-full text-center font-bold py-2 px-4 rounded-lg'>
                                        <label htmlFor="my-modal-3" className="bg-green-700 hover:bg-green-800 text-center text-white w-full font-bold py-2 px-4 rounded-lg">Me faire recontacter</label>
                                    </div>

                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <Contact/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap overflow-hidden py-16">
                    <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="2xl:px-20 xl:px-20 md:px-8 px-4">
                            <div className="">
                                <div className="text-xl font-medium">
                                    Fiche technique
                                </div>
                                <div className=""> 
                                    <div className="flex flex-wrap -mx-2 overflow-hidden">
                                        <div className="my-2 px-2 w-1/2 overflow-hidden">
                                            <ul className='px-4'>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Puissance Fiscale
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.puissFisc + " cv"}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Réservoir d'eau propre
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.reservoirPropre + " l"}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Énergie
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.energie}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Boîte de vitesse
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.bdv}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Moteur
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.porteur}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Cylindrée
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.cylindre + " cm3"}
                                                    </p>
                                                </li>
                                                <NbCouchage couchage={cc.nbCouchage}/>
                                            </ul>
                                        </div>
                                        <div className="my-2 px-2 w-1/2 overflow-hidden">
                                            <ul className='px-4'>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Puissance DIN
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.puissDin + " cv"}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Réservoir d'eau usée
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.reservoirSale + " l"}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Nombre de places carte grise
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.placeCG}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Poids à vide
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.poidsVide + " kg"}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Poids en charge
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.poidsCharge + " kg"}
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='text-gray-400'>
                                                        Nombre de portes
                                                    </p>
                                                    <p className='text-gray-800 dark:text-white px-2'>
                                                        {cc.nbPortes}
                                                    </p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="">
                            <div className="px-4">
                                <div className="text-xl font-medium">
                                    Équipements
                                </div>
                                <div className=""> 
                                    <ul className='px-4'>
                                        {
                                            this.state.equips.map((equip) => (
                                                    <li>
                                                        {equip.libelle}
                                                    </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 pt-16 px-2 w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-1/2">
                        <div className="flex flex-wrap overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="text-xl font-medium 2xl:px-20 xl:px-20 md:px-8 px-4">
                                    D'autres véhicules de la même marque :
                                </div>
                                <div className="flex flex-wrap -mx-1 overflow-hidden px-8 md:px-16 lg:px-24 xl:32">
                                    {
                                        this.state.ccsSimi.map(cc =>
                                            <div className="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/2 p-4">
                                                <CardCC 
                                                    refe={cc.RefDMS}
                                                    marque={cc.marque} 
                                                    modele={cc.modele} 
                                                    ver={cc.ver} 
                                                    prix={cc.prixTTC} 
                                                    photo={cc.linkIMG} 
                                                    km={cc.kilometrage} 
                                                    bdv={cc.boitedevitesse}
                                                    etat={cc.etat}
                                                    famille={cc.famille}
                                                    gamme={cc.gamme}
                                                    annee={cc.année}
                                                    premiereMain={cc.premiereMain}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 pb-4 pt-12 pr-8 px-8 w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-1/2">
                        <div className='border dark:border-gray-100 border-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-2xl shadow-lg'>
                            <p className='pb-2 pt-2 font-bold text-center dark:text-white'>{cc.tel}</p>
                            <MapBis concess={cc.libelle} latitude={cc.latitude} longitude={cc.longitude}/>
                        </div>
                    </div>
                </div>
                <div className='pb-4'>
                    <SlideMarc/>
                </div>
            </div>                 
            ))
        }
        <div>
            <Footer/>
        </div>
        </div>
        )
    }
  }