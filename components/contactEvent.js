import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function CVideOuQuoiLaVariable(props){
    const isSetName = props.isSetName;
    const isSetSurName = props.isSetSurName;
    const isSetCp = props.isSetCp;
    const isSetTel = props.isSetTel;
    const isSetMail = props.isSetMail;
    const isSetDate = props.isSetDate;

    if(((isSetName == "" || isSetName == undefined) || (isSetSurName == "" || isSetSurName == undefined) || (isSetTel == "" || isSetTel == undefined) || (isSetMail == "" || isSetMail == undefined) || (isSetCp == "" || isSetCp == undefined) || (isSetDate == "" || isSetDate == undefined)) && (props.dejaSend === false)){
        return(
            <div className="toast toast-top">
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
            <div className="w-full">
                <h2 className="pt-6 text-lg tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Votre message est envoyé !</h2>
            </div>
        )
    }
}

export default class Contact extends React.Component {
    state = {
        resCapt: [],
    }


    stateSend = () => {
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.codepostal == ""  || this.state.codepostal == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.codepostal != "" && this.state.codepostal != undefined)){
            if(this.state.dejaSend != true){
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({prenom: ""});
                this.setState({tel: ""});
                this.setState({mail: ""});
                this.setState({codepostal: ""});
                this.setState({date: ""});
                
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailContactEvent.php`,{
                params:{
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    tel: this.state.tel,
                    mail: this.state.mail,
                    cp: this.state.codepostal,
                    date: this.state.date,
                    evenement: "Foire de caen du 2 au 5 mars 2023"
                }
                })
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addStatContact.php`,{
                params:{
                    nomcontact: "Contact EVT"
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
        this.setState({ date: e.target.value });
    }

    render(){
        return (
            <div className="overflow-hidden">
                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Foire expo de caen !</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400">Pour en savoir plus sur cet évènement !</p>
                    <CVideOuQuoiLaVariable 
                        isSetName={this.state.nom} 
                        isSetSurName={this.state.prenom} 
                        isSetCp={this.state.codepostal}
                        isSetMail={this.state.mail}
                        isSetTel={this.state.tel}
                        isSetDate={this.state.date}
                    />
                    <div className="flex flex-wrap">
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                            <input value={this.state.nom} type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prénom</label>
                            <input value={this.state.prenom} type="text" id="prenom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Prenom" name="prenom" onChange={this.stateChange} required/>
                        </div>
                        {/*
                            <div className="w-1/2 px-4 py-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Je souhaite venir le : </label>
                                <select value={this.state.date} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="date" required>
                                    <option key={0}>Choisir une date</option>
                                    <option key={1}>03 Février 2023</option>
                                    <option key={2}>04 Février 2023</option>
                                </select>
                            </div>*/
                        }
                        <div className="w-full px-4 py-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                            <input value={this.state.mail} type="email" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@email.com" name="mail" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
                            <input value={this.state.tel} type="number" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+33 06 01 02 03 04" name="tel" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code postal</label>
                            <input value={this.state.codepostal} type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Code postal" name="codepostal" onChange={this.stateChange} required/>
                        </div>
                        <input type="text" id="age" className="hidden" name="age" required/>
                        
                        <div className="w-full px-4 py-4">
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