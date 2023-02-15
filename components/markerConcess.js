import React from "react";
import axios from 'axios';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import Image from "next/image";

export default class MarkerConcess extends React.Component {
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
        const BoatIcon = L.icon({
            iconUrl: "/markermap.png",
            iconSize: [60, 60],
            iconAnchor: [30, 30],
            popupAnchor: [0, 0],
        });

        return (
            <div>
                {
                    this.state.concess.map(concess =>
                        <Marker position={[concess.latitude, concess.longitude]} icon={BoatIcon}>
                            <Tooltip>
                                {concess.libelle}
                            </Tooltip>
                            <Popup>
                                <h2>
                                    <Image height={75} width={125} src={concess.linkIMGConcess} layout={"responsive"}/>
                                </h2>
                                <p>
                                    {concess.libelle}<br></br>
                                    {concess.adress1 + ", " + concess.adress3}<br></br>
                                    {concess.tel}<br></br>
                                    {concess.mail}<br></br>
                                </p>
                            </Popup>
                        </Marker>
                    )
                }
            </div>
        )
    }
}