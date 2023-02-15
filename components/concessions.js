import React from "react";
import axios from 'axios';
import ConcessCard from "./concessCard";

export default class Concessions extends React.Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcess.php?concesss=12`)
          .then(res => {
            const concess = res.data;
            this.setState({ concess });
        });
    }

    state = {
        concess: [],
    }

    render(){
        return (
            <div>
                <div>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos concessions</h2>
                </div>
                <div className="flex flex-wrap">
                {
                    this.state.concess.map(concess =>
                        <div className="w-screen items-center p-4">
                            <ConcessCard 
                                idBDD={concess.idBDD}
                                nom={concess.libelle}
                                adress={concess.adress1 + ", " + concess.adress3}
                                desc1={concess.desc1}
                                desc2={concess.desc2}
                                desc3={concess.desc3}
                                desc4={concess.desc4}
                                mail={concess.mail}
                                tel={concess.tel}
                                linkIMG={concess.linkIMGConcess}
                                soc={concess.societe}
                            />
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}