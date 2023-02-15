import ImgCard from './imgCard'
import { slugify } from '../utils/helpers'
import img1 from "../public/typeCC/img1.png"

export default function CardCC(props) {
    return (  
        <div>
            <a href={`/${slugify(props.refe)}`} className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    <ImgCard link={img1}/>                
                </div>
                <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        {props.etat + " " + props.annee}
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">
                        {props.marque}
                    </h2>
                    <p className="text-sm">
                        {props.modele}
                    </p>
                    <p className="text-sm">
                        {props.ver}
                    </p>
                    <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">
                            {
                                Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(props.prix)
                            }
                        </span>
                    </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                    <div className="flex flex-wrap overflow-hidden">
                    {
                        <BotInfoKm km={props.km}/>
                    }
                    {    
                        <BotInfoBdv bdv={props.bdv}/>
                    }
                    </div>      
                </div>
            </a>
        </div>
    )
}