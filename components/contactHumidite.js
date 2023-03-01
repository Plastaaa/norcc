import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function CVideOuQuoiLaVariable(props){
    const isSetName = props.name;
    const isSetPrenom = props.prenom;
    const isSetTel = props.tel;
    const isSetMail = props.mail;

    const isSetMarque = props.marque;
    const isSetModel = props.model;
    const isSetImmat = props.immat;
    const isSetKm = props.km;
    const isSetAnnee = props.annee;
    const isSetInter = props.inter;

    if(((isSetName == "" || isSetName == undefined)|| (isSetPrenom == "" || isSetPrenom == undefined) || (isSetTel == "" || isSetTel == undefined) || (isSetMail == "" || isSetMail == undefined) || (isSetMarque == "" || isSetMarque == undefined) || (isSetModel == "" || isSetModel == undefined) || (isSetImmat == "" || isSetImmat == undefined) || (isSetKm == "" || isSetKm == undefined) || (isSetAnnee == "" || isSetAnnee == undefined) || (isSetInter == "" || isSetInter == undefined)) && (props.dejaSend === false)){
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

export default class ContactHumidite extends React.Component {
    state = {
        resCapt: [],
    }

    
    stateSend = () => {
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.prenom == ""  || this.state.prenom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.inter == ""  || this.state.inter == undefined) || (this.state.marque == "" || this.state.marque == undefined) || (this.state.model == "" || this.state.model == undefined) || (this.state.immat == "" || this.state.immat == undefined) || (this.state.km == "" || this.state.km == undefined) || (this.state.annee == "" || this.state.annee == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.prenom != "" && this.state.prenom != undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.inter != "" && this.state.inter != undefined) || (this.state.marque != "" && this.state.marque != undefined) || (this.state.model != "" && this.state.model != undefined) || (this.state.immat != "" && this.state.immat != undefined) || (this.state.km != "" && this.state.km != undefined) || (this.state.annee != "" && this.state.annee != undefined)){
            if(this.state.dejaSend != true){
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({prenom: ""});
                this.setState({tel: ""});
                this.setState({mail: ""});
                this.setState({inter: ""});
                this.setState({marque: ""});
                this.setState({model: ""});
                this.setState({immat: ""});
                this.setState({km: ""});
                this.setState({annee: ""});
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailControle.php`,{
                params:{
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    tel: this.state.tel,
                    mail: this.state.mail,
                    inter: this.state.inter,
                    marque: this.state.marque,
                    model: this.state.model,
                    immat: this.state.immat,
                    km: this.state.km,
                    annee: this.state.annee,
                }
                })
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addStatContact.php`,{
                params:{
                    nomcontact: "Contact Controle Humidite"
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
    }

    handleChange = (e) => {
        this.setState({ inter: e.target.value });
    }

    render(){
        return (
            <div className="overflow-hidden">
                <div className="py-2 lg:py-2 max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">RDV Contrôle d'humidité</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre contact pour un rendez vous dans nos ateliers afin de contrôler le niveau d'humidité de votre véhicule de loisirs.</p>
                    <CVideOuQuoiLaVariable 
                        dejaSend={this.state.dejaSend}
                        name={this.state.nom} 
                        prenom={this.state.codepostal}
                        mail={this.state.mail}
                        tel={this.state.tel}

                        marque={this.state.marque}
                        model={this.state.model}
                        immat={this.state.immat}
                        km={this.state.km}
                        annee={this.state.annee}
                        inter={this.state.inter}

                        
                    />
                    <div className="flex flex-wrap">
                    <div className="w-full pl-2 pr-2 pt-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lieu de l'intervention</label>
                            <select value={this.state.inter} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="marque" required>
                                <option key={0}>Choix du lieu</option>
                                <option key={1}>(63) Cap Liberté</option>
                                <option key={2}>(63) Evasion 63</option>
                                <option key={3}>(38) Expo Clavel</option>
                                <option key={4}>(38) Grenoble Camping-car</option>
                                <option key={5}>(74) Curioz Loisirs</option>
                                <option key={6}>(74) Eldorado Camping-car</option>
                                <option key={7}>(14) Auto Camping Car Service</option>
                            </select>
                        </div>
                        <div className="w-1/2 pr-2 py-2">
                            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                            <input value={this.state.nom} type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 pl-2 py-2">
                            <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prénom</label>
                            <input value={this.state.prenom} type="email" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Prénom" name="prenom" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 pr-2 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
                            <input value={this.state.tel} type="number" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+33 06 01 02 03 04" name="tel" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 pl-2 py-2">
                            <label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                            <input value={this.state.mail} type="text" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@email.email" name="mail" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 pr-2 py-2">
                            <label htmlFor="marque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marque</label>
                            <input value={this.state.marque} type="text" id="marque" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Marque" name="marque" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modèle</label>
                            <input value={this.state.model} type="text" id="model" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Modèle" name="model" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 pl-2 py-2">
                            <label htmlFor="immat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Immatriculation</label>
                            <input value={this.state.immat} type="text" id="immat" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Immatriculation" name="immat" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2  pr-2 py-2">
                            <label htmlFor="km" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilomètrage</label>
                            <input value={this.state.km} type="number" id="km" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Kilomètrage" name="km" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 pl-2 py-2">
                            <label htmlFor="annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Année de première mise en circulation</label>
                            <input value={this.state.annee} type="number" id="annee" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Année" name="annee" onChange={this.stateChange} required/>
                        </div>
                        <input type="text" id="age" className="hidden" name="age" required/>
                        
                        <div className="w-full xs:w-full sm:w-full md:w-1/2 lg:w-full xl:w-1/2 px-4 py-4">
                            <div className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <button onClick={this.stateSend} className="w-full">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}