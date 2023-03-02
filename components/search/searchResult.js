import React from "react";
import axios from 'axios';
import CardCC from "../cardCC";

export default class SearchResult extends React.Component {
    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const etatURL = queryParams.get('etat');
        const gammeURL = queryParams.get('gamme');
        const marqueURL = queryParams.get('marque');
        const anneeMinURL = queryParams.get('anneeMin');
        const anneeMaxURL = queryParams.get('anneeMax');
        const porteurURL = queryParams.get('porteur');
        const prixMinURL = queryParams.get('prixMin');
        const prixMaxURL = queryParams.get('prixMax');
        const kmMinURL = queryParams.get('kmMin');
        const kmMaxURL = queryParams.get('kmMax');
        const placeURL = queryParams.get('place');
        const refURL = queryParams.get('ref');
        //const choixConcessURL = queryParams.get('concession');
        const pageURL = queryParams.get('page');
        const triURL = queryParams.get('orderBy');
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCByParamDev.php`,{
            params:{
                etat: etatURL,
                marque: marqueURL,
                gamme: gammeURL,
                yearMin: anneeMinURL,
                yearMax: anneeMaxURL,
                porteur: porteurURL,
                prixMin: prixMinURL,
                prixMax: prixMaxURL,
                kmMin: kmMinURL,
                kmMax: kmMaxURL,
                placeCG: placeURL,
                ref: refURL,
                concess: "Normandie Camping-Car",
                concesss: 12,
                orderBy: triURL,
                page: pageURL,
            }
        })
          .then(res => {
            const ccs = res.data;
            this.setState({ ccs: ccs });
          });
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
            [name]: value,
        });
    }

    state = {
        ccs: [],
        brands: [],
        gammes: [],
        refs: [],
        etats: [],
    }

    
    render() {
        return (
            <div>
                <div className="flex flex-wrap overflow-hidden">
                    <div className="w-full overflow-hidden">
                        <div className="flex flex-wrap -mx-1 overflow-hidden">
                            {
                                this.state.ccs.map(cc =>
                                    <div className="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
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
        );
    }
}