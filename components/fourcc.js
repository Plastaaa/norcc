import React from "react"
import axios from "axios";
import CardCC from "./cardCC";

export default class MiniSearch extends React.Component {
    componentDidMount(){
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/get4CCByConcess.php`,{
            params:{
                concess: 12
            }
        })
            .then(res => {
                const ccs = res.data;
                this.setState({ ccs });
            });
    }

    state = {
        ccs: [],
    }
    
    render(){
        return (
            <div className="flex flex-wrap overflow-hidden">
                <div className="w-full overflow-hidden">
                    <div className="flex flex-wrap -mx-1 overflow-hidden px-8 md:px-16 lg:px-24 xl:32">
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
                        <div className="relative bottom-0 right-0">
                            <a href="./stock?page=1">
                                <button className="">
                                    Voir plus
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}



