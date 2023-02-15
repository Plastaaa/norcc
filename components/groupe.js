import Image from "next/image"
import imgLogo from '../public/logo/groupe/groupe.png'

export default function Groupe() {
    return (
        <div className="px-4 md:px-12 pb-12">
            <div className="flex flex-wrap shadow-lg border border-gray-100 rounded-2xl pb-4">
                <div className="w-full">
                    <h2 className="mb-4 pt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-10">Le groupe David Gerbier</h2>
                </div>
                <div className="w-full md:w-full lg:w-1/2 px-8">
                    <p className="indent-8">
                        Acteur majeur de la distribution automobile depuis 1984, <a className="font-bold">le Groupe David Gerbier</a> a commencé sa diversification en 2010 sur le marché du véhicule de loisirs.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        En janvier 2010, <a className="font-bold">le Groupe David Gerbier</a> reprend la concession <a href="./expo-clavel" className="font-bold">Expo Clavel</a>, basée à Moirans, près de Grenoble. Une seconde acquisition intervient en 2012 avec la société <a href="./grenoble-camping-car" className="font-bold">Grenoble Camping-Car</a>, située à Voreppe près de Grenoble.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        En 2018, les sociétés <a href="./curioz-loisirs" className="font-bold">Curioz Loisirs</a> et <a href="./eldorado-camping-car" className="font-bold">Eldorado Camping-Car</a>, toutes les deux proches d’Annecy, rejoignent le groupe.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        En août 2020, le groupe continu sa croissance en Auvergne, avec 3 sites situés en périphérie de Clermont Ferrand : <a href="./cap-liberte" className="font-bold">Cap Liberté</a>, <a href="./evasion-63" className="font-bold">Evasion 63</a> et <a href="./mozac-loisirs" className="font-bold">Mozac Loisirs</a>.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Parallèlement à ces acquisitions, 3 sites dédiés aux véhicules plus compacts, profilés courts, Fourgons et Vans sont créés. Le premier, <a href="./dg8cc73" className="font-bold">DG8 Camping-car 73</a>, à La Ravoire à proximité de Chambéry, le second, <a href="./dg8cc63" className="font-bold">DG8 Camping-Car 63</a>, à Aubière près de Clermont Ferrand, et le dernier, <a href="./dg8cc01" className="font-bold">DG8 Camping-Car 01</a> à Cessy dans l’Ain près de Genève.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        En septembre 2022, le groupe effectue un nouvel investissement majeur en Normandie dans le monde du véhicule de loisirs avec <a href="./accs" className="font-bold">Auto Camping-Car Service</a>, <a href="./normandiecc" className="font-bold">Normandie Camping-Car</a> et <a href="./carpiquetcc" className="font-bold">Carpiquet Camping-Car</a>.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        <a className="font-bold">Le Groupe David Gerbier</a>, distribuant maintenant 40 marques de véhicules de loisirs sur 13 sites, est aujourd’hui le leader de la distribution de véhicules de Loisirs.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Les plus de 500 collaborateurs du groupe sont animés par la volonté de tout mettre en œuvre pour satisfaire leurs clients !
                    </p>
                </div>
                <div className="w-full md:w-full lg:w-1/2 px-8">
                    <div className="p-10">
                        <Image alt="Logo groupe david gerbier" src={imgLogo}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }