import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function CVideOuQuoiLaVariable(props){
    const isSetName = props.isSetName;
    const isSetCp = props.isSetCp;
    const isSetTel = props.isSetTel;
    const isSetMail = props.isSetMail;
    const isSetObj = props.isSetObj;

    if(((isSetName == "" || isSetName == undefined) || (isSetTel == "" || isSetTel == undefined) || (isSetMail == "" || isSetMail == undefined) || (isSetCp == "" || isSetCp == undefined) || (isSetObj == "" || isSetObj == undefined)) && (props.dejaSend === false)){
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


    stateSend = () => {
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.codepostal == ""  || this.state.codepostal == undefined) || (this.state.objet == "" || this.state.objet == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.codepostal != "" && this.state.codepostal != undefined) || (this.state.objet != "" && this.state.objet != undefined)){
            if(this.state.dejaSend != true){
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({tel: ""});
                this.setState({mail: ""});
                this.setState({codepostal: ""});
                this.setState({objet: ""});

                var url = window.location.href;
                var refe = url.split("/");
                console.log(refe[4]);
                
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailContactVU.php`,{
                params:{
                    nom: this.state.nom,
                    tel: this.state.tel,
                    mail: this.state.mail,
                    cp: this.state.codepostal,
                    msg: this.state.objet,
                    ref: refe[4],
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

    render(){
        return (
            <div className="overflow-hidden">
                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactez moi !</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400">Prendre contact avec nos équipes pour en savoir plus à propos de ce véhicule.</p>
                    <CVideOuQuoiLaVariable 
                        dejaSend={this.state.dejaSend}
                        isSetName={this.state.nom} 
                        isSetCp={this.state.codepostal}
                        isSetMail={this.state.mail}
                        isSetTel={this.state.tel}
                        isSetObj={this.state.objet}
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
                            <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code postal</label>
                            <input value={this.state.codepostal} type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Code postal" name="codepostal" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-full px-4">
                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Objet de la demande</label>
                            <textarea value={this.state.objet} rows={3} type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dites nous comment vous aider." name="objet" onChange={this.stateChange} required/>
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