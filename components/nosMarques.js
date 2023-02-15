import React from "react";
import axios from 'axios';
import MarqueCard from "./marqueCard";

export default class Concessions extends React.Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getMarques.php?concess=12`)
          .then(res => {
            const marque = res.data;
            this.setState({ marque });
        });
    }

    state = {
        marque: [],
    }

    render(){
        return (
            <div>
                <div className="pt-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos marques distribuées</h2>
                </div>
                <div className="flex flex-wrap">
                {
                    this.state.marque.map(marque =>
                        <div className="w-full xl:w-1/4 md:w-1/2 sm:w-1/2 items-center p-4">
                            <MarqueCard 
                                marque={marque.marque}
                                description={marque.description}
                                linkIMG={marque.linkIMG}
                                linkMarque={marque.linkMarque}
                            />
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}