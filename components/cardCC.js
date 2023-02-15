import ImgCard from './imgCard'
import { slugify } from '../utils/helpers'
import Link from 'next/link';
import Image from 'next/image';
import { Helmet } from 'react-helmet';

function BotInfoBdv(props){
    const bdv = props.bdv;

    if(bdv == ""){
        return <NoBDV/>
    }
    return <BDV bdv={bdv}/>
}
function NoBDV(props){
    return (
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    <br/>
                </div>
            </div>                        
        </div>
    )
}
function BDV(props){
    const bdv = props.bdv;
    return(
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                    <div className="block dark:hidden">
                        <Image alt='icone kilometrage' src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/ICON/gearbox.png"} className={"block dark:hidden"} height={20} width={20}/>
                    </div>
                    <div className="hidden dark:block">
                        <Image alt='icone kilometrage dark' src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/ICON/whitegearbox.png"} className={"hidden dark:block"} height={20} width={20}/>
                    </div>
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    {bdv}
                </div>
            </div>                        
        </div>
    )
}


function BotInfoKm(props){
    const km = props.km;

    if(km == "0"){
        return <NoKM/>
    }
    return <KM km={km}/>
}
function NoKM(props){
    return(
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    <br/>
                </div>
            </div>                        
        </div>
    )
}
function KM(props){
    const km = props.km;
    return(
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                <div className="my-2 px-2 w-1/8 overflow-hidden sm:my-2 sm:px-2 sm:w-1/8 md:my-2 md:px-2 md:w-1/8 lg:my-2 lg:px-2 lg:w-1/8 xl:my-2 xl:px-2 xl:w-1/8">
                    <div className={"block dark:hidden"}>
                        <Image alt='icone boite de vitesse' src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/ICON/road.png"} height={20} width={20}/>
                    </div>
                    <div className={"hidden dark:block"}>
                        <Image alt='icone boite de vitesse dark' src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/ICON/whiteroad.png"} height={20} width={20}/>
                    </div>
                    {
                        //<img alt='km' className='h-4' src='../icon/road.png'/>
                    }
                </div>
                <div className="my-2 px-2 w-7/8 overflow-hidden sm:my-2 sm:px-2 sm:w-7/8 md:my-2 md:px-2 md:w-7/8 lg:my-2 lg:px-2 lg:w-7/8 xl:my-2 xl:px-2 xl:w-7/8">
                    {km + " km"}
                </div>
            </div>  
        </div>
    )
}

export default function CardCC(props) {    
    return (  
        <div className='c-card block dark:bg-gray-800 dark:border dark:border-gray-600 bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden'>
            <a href={`/stock/${slugify(props.refe)}`}>
                <div className="">
                    <div className="relative overflow-hidden">
                        <ImgCard link={props.photo} nom={props.marque+""+props.modele+""+props.ver}/>
                    </div>
                    <div className="p-4">
                        <span className="inline-block px-2 py-1 leading-none dark:bg-green-600 dark:text-white bg-green-800 text-white rounded-full font-semibold uppercase tracking-wide text-xs">
                            {props.etat + " " + props.annee}
                        </span>
                        <h2 className="mt-2 mb-2 dark:text-gray-200 font-bold notranslate">
                            {props.marque}
                        </h2>
                        <p className="text-sm dark:text-gray-200">
                            {props.modele}
                        </p>
                        <p className="text-sm dark:text-gray-200">
                            {props.ver}
                        </p>
                        <p className="text-sm dark:text-gray-200">
                            {props.libelle}
                        </p>
                    </div>
                </div>
            </a>
                <div>
                    <div>
                        <div className="mt-3 flex flex-wrap items-center">
                            <div className='w-1/2 text-right pb-2'>
                                <span className="font-semibold dark:text-gray-200 text pr-4">
                                    {
                                        Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(props.prix)
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            
            <a href={`/stock/${slugify(props.refe)}`}>
                <div>
                    <div className="p-4 dark:border-gray-600 dark:text-gray-200 border-t border-b text-xs text-gray-700">
                        <div className="flex flex-wrap overflow-hidden">
                        {
                            <BotInfoKm km={props.km}/>
                        }
                        {    
                            <BotInfoBdv bdv={props.bdv}/>
                        }
                        </div>      
                    </div>
                </div>
            </a>
        </div>
    )
}