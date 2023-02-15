import React from "react"
import axios from "axios";

export default class MiniSearch extends React.Component {
    componentDidMount(){
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllMarque.php?concesss=12`)
            .then(res => {
                const brands = res.data;
                this.setState({ brands });
            });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctGamme.php?concesss=12`)
            .then(res => {
                const gammes = res.data;
                this.setState({ gammes });
            });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctEtat.php?concesss=12`)
            .then(res => {
                const etats = res.data;
                this.setState({ etats });
            });
    }

    state = {
        brands: [],
        gammes: [],
        etats: [],
        concess: []
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
            [name]: value,
        });
    }

    stateSend = (props) => {
        window.location.href = "./stock?marque="+this.state.marque+"&etat="+this.state.etat+"&gamme="+this.state.gamme+"&page=1";
    }
    
    render(){
        return (
            <div className="p-6 sm:p-6 md:p-0 lg:p-0">
                <div className="border border-gray-300 rounded-lg">
                    <div className="stats-vertical md:stats-horizontal lg:stats-horizontal">
                        <div className="stat md:w-64 lg:w-80">
                            <label className="stat-title">Marque du véhicule</label>
                            <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="marque" onChange={this.stateChange}>
                                <option key={0} value="0">Choisir la marque</option>
                                
                                {
                                    this.state.brands.map(marques => 
                                        <option key={marques.marque} value={marques.marque}>{marques.marque}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="stat md:w-64 lg:w-80">
                            <label className="stat-title">Type de véhicule</label>
                            <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="gamme" onChange={this.stateChange}>
                                <option key={0} value="0">Choisir la gamme</option>
                                <option key={"Fourgon"} value={"Fourgon"}>Fourgon</option>
                                <option key={"Profile"} value={"Profile"}>Profile</option>
                                <option key={"Van"} value={"Van"}>Van</option>
                                <option key={"Intégral"} value={"Intégral"}>Intégral</option>
                                <option key={"Capucine"} value={"Capucine"}>Capucine</option>
                            </select>
                        </div>
                        <div className="stat md:w-64 lg:w-80">
                            <div className="stat-title">Etat du véhicule</div>
                            <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" onChange={this.stateChange}>
                                <option key={0} value="0">Etat</option>
                                {
                                    this.state.etats.map(etats => 
                                        <option key={etats.etat} value={etats.etat}>{etats.etat}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="pt-4 grid place-items-center">
                    <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 w-full lg:w-96 md:w-64 sm:w-32 rounded-lg" onClick={this.stateSend}>
                        Rechercher
                    </button>
                </div>
            </div>
        )
    }
}