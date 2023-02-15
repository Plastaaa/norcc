import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup, Tooltip } from 'react-leaflet';
import MarkerConcess from './markerConcess'
import autoprefixer from 'autoprefixer';

export default function Map(props) {
    var [geoData, setGeoData] = useState({ lat: props.latitude, lng: props.longitude });
    var center = [geoData.lat, geoData.lng];

    return (
        <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ width:"auto", height: '50vh', borderRadius: "16px" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Contributeurs'
                url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'"
            />
            <MarkerConcess/>
        </MapContainer>
    );
}
