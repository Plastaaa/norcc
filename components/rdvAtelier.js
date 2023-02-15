import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function CVideOuQuoiLaVariable(props){
    const isSetName = props.isSetName;
    const isSetCp = props.isSetCp;
    const isSetTel = props.isSetTel;
    const isSetMail = props.isSetMail;

    const isSetMarque = props.marque;
    const isSetModel = props.model;
    const isSetImmat = props.immat;
    const isSetKm = props.km;
    const isSetAnnee = props.annee;
    const isSetInter = props.inter;

    if(((isSetName == "" || isSetName == undefined) || (isSetTel == "" || isSetTel == undefined) || (isSetMail == "" || isSetMail == undefined) || (isSetCp == "" || isSetCp == undefined) || (isSetMarque == "" || isSetMarque == undefined) || (isSetModel == "" || isSetModel == undefined) || (isSetImmat == "" || isSetImmat == undefined) || (isSetKm == "" || isSetKm == undefined) || (isSetAnnee == "" || isSetAnnee == undefined) || (isSetInter == "" || isSetInter == undefined)) && (props.dejaSend === false)){
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

export default class RDVAtelier extends React.Component {
    state = {
        resCapt: [],
    }

    
    stateSend = () => {
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.codepostal == ""  || this.state.codepostal == undefined) || (this.state.marque == "" || this.state.marque == undefined) || (this.state.model == "" || this.state.model == undefined) || (this.state.immat == "" || this.state.immat == undefined) || (this.state.km == "" || this.state.km == undefined) || (this.state.annee == "" || this.state.annee == undefined) || (this.state.inter == "" || this.state.inter == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.codepostal != "" && this.state.codepostal != undefined) || (this.state.marque != "" && this.state.marque != undefined) || (this.state.model != "" && this.state.model != undefined) || (this.state.immat != "" && this.state.immat != undefined) || (this.state.km != "" && this.state.km != undefined) || (this.state.annee != "" && this.state.annee != undefined) || (this.state.inter != "" && this.state.inter != undefined)){
            if(this.state.dejaSend != true){
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({tel: ""});
                this.setState({mail: ""});
                this.setState({codepostal: ""});
                this.setState({objet: ""});
                this.setState({marque: ""});
                this.setState({model: ""});
                this.setState({immat: ""});
                this.setState({km: ""});
                this.setState({annee: ""});
                this.setState({inter: ""});
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailAtelier.php`,{
                params:{
                    nom: this.state.nom,
                    tel: this.state.tel,
                    mail: this.state.mail,
                    cp: this.state.codepostal,
                    obj: this.state.objet,
                    marque: this.state.marque,
                    model: this.state.model,
                    immat: this.state.immat,
                    km: this.state.km,
                    annee: this.state.annee,
                    inter: this.state.inter,
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
                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">RDV Atelier</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre contact pour un rendez vous dans nos ateliers.</p>
                    <CVideOuQuoiLaVariable 
                        dejaSend={this.state.dejaSend}
                        isSetName={this.state.nom} 
                        isSetCp={this.state.codepostal}
                        isSetMail={this.state.mail}
                        isSetTel={this.state.tel}
                        isSetObj={this.state.objet}

                        isSetMarque={this.state.marque}
                        isSetModel={this.state.model}
                        isSetImmat={this.state.immat}
                        isSetKm={this.state.km}
                        isSetAnnee={this.state.annee}
                        isSetInter={this.state.inter}
                    />
                    <div className="flex flex-wrap">
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                            <input value={this.state.nom} type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                        </div>
                        
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                            <input value={this.state.mail} type="email" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@email.com" name="mail" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
                            <input value={this.state.tel} type="number" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+33 06 01 02 03 04" name="tel" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code postal ou département</label>
                            <input value={this.state.codepostal} type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Code postal" name="codepostal" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-full pt-2 px-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Motif de l'intervention</label>
                            <select value={this.state.inter} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="marque" required>
                                <option key={0}>Choix de l'intervention</option>
                                <option key={1}>Entretien</option>
                                <option key={2}>Pose d'accessoires</option>
                                <option key={3}>Carrosserie</option>
                                <option key={4}>Nettoyage</option>
                                <option key={5}>Contrôle d'humidité</option>
                                <option key={6}>Réparation</option>
                                <option key={7}>Diagnostic électrique</option>
                                <option key={8}>Garantie constructeur</option>
                                <option key={9}>Panne/Diagnostic</option>
                                <option key={10}>Voyant allumé après visite en atelier</option>
                                <option key={11}>Pneumatique / parallélisme</option>
                                <option key={12}>Récupération / remplacement du pare-brise</option>
                                <option key={13}>Freinage</option>
                                <option key={14}>Climatisation</option>
                                <option key={15}>Distribution</option>
                                <option key={16}>Échappement</option>
                                <option key={17}>Autres demandes</option>
                            </select>
                        </div>
                        <div className="w-full pt-4 px-4">
                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Complément d'information</label>
                            <textarea value={this.state.objet} rows={5} type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="N'hésitez pas à détailler ici." name="objet" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 px-4 py-2">
                            <label htmlFor="marque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marque</label>
                            <input value={this.state.marque} type="text" id="marque" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Marque" name="marque" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 px-4 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modèle</label>
                            <input value={this.state.model} type="text" id="model" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Modèle" name="model" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 px-4 py-2">
                            <label htmlFor="immat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Immatriculation</label>
                            <input value={this.state.immat} type="text" id="immat" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Immatriculation" name="immat" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="km" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilomètrage</label>
                            <input value={this.state.km} type="number" id="km" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Kilomètrage" name="km" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="annee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Année</label>
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