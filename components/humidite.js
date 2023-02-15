import Image from "next/image"
import ContactHumidite from "./contactHumidite"

export default function Humidite() {
    return (
        <div className="sm:px-4 md:px-12 lg:px-32 xl:px-48 px-4 pt-8 pb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contrôle d'humidité</h2>
            <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre soin de mon véhicule.</p>
            <div className="flex flex-wrap">
                <div className="sm:w-full lg:w-2/3 w-full">
                    <p className="indent-8">
                        Le test d’humidité de votre camping-car, van ou fourgon aménagé est essentiel pour assurer sa pérennité. De plus, le certificat que décerne ce test est obligatoire pour conserver la garantie constructeur de votre véhicule. Ce test doit être effectué 1 fois par an pour garder ce bénéfice. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Les véhicules de loisirs sont mis à rude épreuve et exposés à tous les éléments. Il est donc impossible d’éviter toute possibilité d’infiltration. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        C’est pour cette raison que les constructeurs ont mis en place des garanties, soumises à la réalisation annuelle d’un test d’humidité par le biais d’un professionnel. 
                    </p>
                </div>
                <div className="sm:w-full lg:w-1/3 w-full pt-4">
                    <div className="border border-gray-400 rounded-xl">
                        <Image alt="Controle d'humidite 1" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/humidite1.jpg"} objectFit={"cover"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="sm:w-full lg:w-1/3 w-full pt-4">
                    <div className="border border-gray-400 rounded-xl">
                        <Image alt="Controle d'humidite 2" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/humidite2.jpg"} objectFit={"cover"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="sm:w-full lg:w-2/3 w-full pt-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">En quoi ça consiste ?</h2>
                    <p className="indent-8 pl-4">
                        Le test d’humidité est réalisé en plusieurs étapes par l’un de nos techniciens et permet de localiser et traiter toute infiltration précoce ou existante. 
                    </p>
                    <ul className="pl-20 list-disc">
                        <li>Contrôle visuel.</li>
                        <li>Contrôle des parois à l’aide d’un Hydromètre reconnu constructeurs.</li>
                        <li>Obtention d’un certificat attestant de la remise en état du véhicule. </li>
                    </ul>
                </div>
                <div className="w-full pt-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Pourquoi faut-il impérativement contrôler ?</h2>
                    <p className="indent-8">
                        Bien souvent le constructeur offre au véhicule une garantie de 5 ans qui ne sera valable qu’avec un certificat attestant du bon état du véhicule. Cette condition de garantie est également applicable aux extensions de garantie via financement et assurances personnelles. 
                    </p>
                    <p className="indent-8">
                        Chez DG8 camping-car, nous effectuons avant la vente, un test d’humidité complet et adapté au modèle du véhicule qu’il soit neuf ou d’occasion. Un certificat vous est fourni lors de son achat. 
                    </p>
                    <ul className="pl-16 list-disc">
                        <li>Prenez rendez-vous dans l’une de vos concessions DG8 Camping-car.</li>
                        <li>La durée de l’intervention est de 1h.</li>
                        <li>Récupérez-votre véhicule et votre certificat.</li>
                        <li>Voyagez en toute sérénité.</li>
                    </ul>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-16">
                        <ContactHumidite/>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }