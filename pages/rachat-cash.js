import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import rachat from '../public/rachatcash.png'
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";


function CVideOuQuoiLaVariable(props){
    var isSetNom = props.isSetNom;
    var isSetPrenom = props.isSetPrenom;
    var isSetTel = props.isSetTel;
    var isSetMail = props.isSetMail;
    var isSetCp = props.isSetCp;

    var isSetImmat = props.isSetImmat;
    var isSetModel = props.isSetModel;
    var isSetPorteur = props.isSetPorteur;
    var isSetFinition = props.isSetFinition;
    var isSetKm = props.isSetKm;
    var isSetAnnee = props.isSetAnnee;
    var isSetOptAdd = props.isSetOptAdd;

    if(((isSetNom == "" || isSetNom == undefined) || (isSetPrenom == "" || isSetPrenom == undefined) || (isSetTel == "" || isSetTel == undefined) || (isSetMail == "" || isSetMail == undefined) || (isSetCp == "" || isSetCp == undefined) || (isSetImmat == "" || isSetImmat == undefined) || (isSetModel == "" || isSetModel == undefined) || (isSetPorteur == "" || isSetPorteur == undefined) || (isSetFinition == "" || isSetFinition == undefined) || (isSetKm == "" || isSetKm == undefined) || (isSetAnnee == "" || isSetAnnee == undefined) || (isSetOptAdd == "" || isSetOptAdd == undefined)) && (props.dejaSend === false)){
        return(
            <div className="toast toast-bottom">
                <div className="alert alert-error">
                    <div>
                        <span>Veuillez vous assurer d'avoir rempli le ou les champs manquants.</span>
                    </div>
                </div>
            </div>
        )
    }

    if(props.dejaSend === true){
        return(
            <div>
                <p>Message envoyé</p>
            </div>
        )
    }
}

export default class Contact extends React.Component {

    
    state = {
        resCapt: [],
    }

    handleChange(e) {
        let isChecked = e.target.checked;
        if(e.target.id == "tHum"){
            if(isChecked){
                this.setState({thum: 1});
            }else{
                this.setState({thum: 0});
            }
        }
        if(e.target.id == "tFin"){
            if(isChecked){
                this.setState({tfin: 1});
            }else{
                this.setState({tfin: 0});
            }
        }
    }

    stateSend = () => {
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.codepostal == "" || this.state.codepostal == undefined) || (this.state.tel == "" || this.state.tel == undefined) || (this.state.immat == "" || this.state.immat == undefined) || (this.state.model == "" || this.state.model == undefined) || (this.state.finition == "" || this.state.finition == undefined) || (this.state.km == "" || this.state.km == undefined) || (this.state.annee == "" || this.state.annee == undefined) || (this.state.optadd == "" || this.state.optadd == undefined) || (this.state.porteur == "" || this.state.porteur == undefined)){
            this.setState({dejaSend: false});
            console.log(this.state.nom);
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.prenom != "" && this.state.prenom != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.codepostal != "" && this.state.codepostal != undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.immat != "" && this.state.immat != undefined) || (this.state.model != "" && this.state.model != undefined) || (this.state.finition != "" && this.state.finition != undefined) || (this.state.km != "" && this.state.km != undefined) || (this.state.annee != "" && this.state.annee != undefined) || (this.state.optadd != "" && this.state.optadd != undefined) || (this.state.porteur != "" && this.state.porteur != undefined)){
            if(this.state.dejaSend != true){
                console.log("passed");
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({prenom: ""});
                this.setState({mail: ""});
                this.setState({codepostal: ""});
                this.setState({tel: ""});
                this.setState({immat: ""});
                this.setState({model: ""});
                this.setState({porteur: ""});
                this.setState({finition: ""});
                this.setState({km: ""});
                this.setState({annee: ""});
                this.setState({optadd: ""});
                this.setState({tFin: ""});
                this.setState({tHum: ""});
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailRC.php`,{
                params:{
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    mail: this.state.mail,
                    cp: this.state.codepostal,
                    tel: this.state.tel,
                    immat: this.state.immat,
                    model: this.state.model,
                    porteur: this.state.porteur,
                    finition: this.state.finition,
                    km: this.state.km,
                    annee: this.state.annee,
                    optadd: this.state.optadd,
                    tfin: this.state.tfin,
                    thum: this.state.thum,
                }
                })
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addStatContact.php`,{
                params:{
                    nomcontact: "Contact RACHAT CASH"
                }
                })
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendReturnContact.php`,{
                    params:{
                        mail: this.state.mail
                    }
                })
            }
        }
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
        console.log(f.target);
    }

    componentDidMount(){
        ReactGA.pageview("RachatCash");
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>DG8 Camping-car - Rachat Cash</title>
                    <meta name="description" content="Vous désirez vendre votre véhicules ? DG8 camping car vous propose un service de rachat cash. Prenez contact avec notre équipe. "/>
                </Helmet>
                <div>
                    <NavBar/>
                </div>
                <div className='p-8'>
                    <Image className='rounded rounded-xl' alt='image rachat cash' src={rachat} />
                    <div className='flex flex-wrap pt-10'>
                        <div className='w-full xl:w-1/3 lg:w-1/3 md:w-full xs:w-full p-8'>
                            <div className='pt-10 text-center'>
                                <p className='font-bold text-lg'>
                                    Vous êtes propriétaire ?
                                </p>
                            </div>
                            <div className='pt-4'>
                                <p>
                                    Vous êtes propriétaire d’un camping-car ou d’une caravane ,vous avez un projet de renouvellement ou vous voulez tout simplement vous séparer de votre véhicule actuel ?
                                </p>
                            </div>
                            <div className='pt-4'>
                                <p>
                                    DG8Camping-car vous fera les meilleures offres d’achat ou de dépôt vente pour votre véhicule de loisirs.
                                </p>
                            </div>
                            <div className='pt-4'>
                                <p>
                                    N’hésitez pas à nous contacter par téléphone ou par e-mail pour en connaître les modalités.
                                </p>
                            </div>
                            <div className='pt-4'>
                                <p className='font-bold'>
                                    L’ASSURANCE D’UN PAIEMENT RAPIDE ET SÉCURISÉ !
                                </p>
                            </div>
                            <div className='pt-4'>
                                    <ul className='list-disc px-8'>
                                        <li>
                                            En vous adressant à un professionnel, vous évitez tous risques.
                                        </li>
                                        <li>
                                            Vous êtes exempté du risque juridique lié à un problème technique du véhicule vendu, par la prise en charge financière des risques de pannes par notre groupe.
                                        </li>
                                        <li>
                                            Une transaction facilitée par notre gestion des démarches administratives.
                                        </li>
                                        <li>
                                            UN GAIN DE TEMPS
                                        </li>
                                        <li>
                                            Ne perdez plus de temps à passer des annonces, à gérer la vente et les acheteurs potentiels. Nous nous occupons de tout pour vous !
                                        </li>
                                        <li>
                                            Vendez plus vite et soyez assuré de ne plus avoir à assurer le SAV !
                                        </li>
                                    </ul>
                            </div>
                        </div>
                        <div className='w-full xl:w-2/3 lg:w-2/3 md:w-full xs:w-full'>
                            <div className='text-center w-full'>
                                <h2 className='font-bold text-lg'>Contact RACHAT CASH</h2>
                                <p className="mb-8 lg:mb-8 italic text-xs font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre contact avec nos équipes pour vendre votre véhicule.</p>
                                <CVideOuQuoiLaVariable 
                                    dejaSend={this.state.dejaSend}
                                    isSetNom={this.state.nom} 
                                    isSetPrenom={this.state.prenom}
                                    isSetTel={this.state.tel}
                                    isSetMail={this.state.mail}
                                    isSetCp={this.state.codepostal}
                                    isSetImmat={this.state.codepostal}
                                    isSetModel={this.state.model}
                                    isSetPorteur={this.state.porteur}
                                    isSetFinition={this.state.finition}
                                    isSetKm={this.state.km}
                                    isSetAnnee={this.state.annee}
                                    isSetOptAdd={this.state.optadd}
                                    isSetTHum={this.state.thum}
                                    isSetTFin={this.state.tfin}
                                />
                            </div>
                            <div className='flex flex-wrap'>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                                    <input value={this.state.nom} type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prénom</label>
                                    <input value={this.state.prenom} type="text" id="prenom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="Prénom" name="prenom" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                                    <input value={this.state.mail} type="text" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="email@email.com" name="mail" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code postal ou département</label>
                                    <input value={this.state.codepostal} type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Code postal" name="codepostal" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
                                    <input value={this.state.tel} type="number" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+33 06 01 02 03 04" name="tel" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="immat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Immatriculation</label>
                                    <input value={this.state.immat} type="text" id="immat" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="AA-159-BB" name="immat" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modèle</label>
                                    <input value={this.state.model} type="text" id="model" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Modèle" name="model" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="porteur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Porteur</label>
                                    <input value={this.state.porteur} type="text" id="porteur" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Fiat" name="porteur" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="finition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Finition</label>
                                    <input value={this.state.finition} type="text" id="finition" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Finition" name="finition" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/2 px-4 py-2'>
                                    <label htmlFor="km" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilomètrage</label>
                                    <input value={this.state.km} type="number" id="km" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="120 500" name="km" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/2 px-4 py-2'>
                                    <label htmlFor="annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Année</label>
                                    <input value={this.state.annee} type="number" id="annee" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="2020" name="annee" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <label htmlFor="optadd" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Options ajoutée</label>
                                    <textarea value={this.state.optadd} rows={1} type="text" id="optadd" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Panneau solaire, Antenne TV..." name="optadd" onChange={this.stateChange} required/>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <div class="flex pt-8">
                                        <div class="flex items-center">
                                            <input onChange={e => this.handleChange(e)} id="tHum" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                        </div>
                                        <div class="ml-2 text-sm">
                                            <label for="tHum" class="font-medium text-gray-900 dark:text-gray-300">Test d'humidité</label>
                                            <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Le test d'humidité est-il à jour ?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/3 px-4 py-2'>
                                    <div class="flex pt-8">
                                        <div class="flex items-center">
                                            <input onChange={e => this.handleChange(e)} id="tFin" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                        </div>
                                        <div class="ml-2 text-sm">
                                            <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">Financement à solder</label>
                                            <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Reste t-il du financement à solder ?</p>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" id="age" className="hidden" name="age" required/>
                                
                                <div className='w-1/2 pt-10 px-8 py-2'>
                                    <div className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        <button onClick={this.stateSend} className="w-full">Envoyer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}