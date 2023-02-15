import Image from "next/image"

export default function VanFourgon() {
    return (
        <div className="px-8 sm:px-8 md:px-16 lg:px-32 xl:px-48 pt-16 pb-12">
            <h2 className="pb-16 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le guide du van et du fourgon</h2>
            {
                //<p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre soin de mon véhicule.</p>
            }
            <div className="flex flex-wrap">
                <div className="sm:hidden xl:block xl:w-1/3 pt-8">
                    <div className="rounded-xl">
                        <Image alt="Fourgon" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/fourgon.png"} objectFit={"contain"} layout={"responsive"} height={100} width={200} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le van et le fourgon aménagé</h2>
                    <p className="indent-8 pl-4">
                        Le fourgon aménagé et le van sont les véhicules tendances de l’année ! Compacts avec de nombreux atouts, ils ont séduit le cœur des Français. En fonction de votre mode vie et de vos habitudes nous vous aiderons à trouver le van ou le fourgon aménagé fait pour vous ! 
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Chez DG8 Camping-car c’est plus de 150 fourgons et vans neufs et d’occasion. Nous distribuons des marques spécialisées en la matière comme :
                    </p><br></br>
                    <ul className="pl-16 list-disc">
                        <li>Westfalia</li>
                        <li>Stylevan</li>
                        <li>Font Vendôme</li>
                        <li>Pössl</li>
                        <li>Hymer camper van</li>
                        <li>Campster/Vanster</li>
                        <li>Malibu</li>
                        <li>Road car</li>
                        <li>Randger</li>
                        <li>Cross camp</li>
                        <li>Burstner, Copa...</li>
                    </ul><br></br>
                    <p className="indent-8 pl-4">
                        Vous pourrez retrouver aussi de nombreux modèles chez les constructeurs de camping-car qui disposent pratiquement tous d’une gamme van/fourgon.
                    </p><br></br>
                </div>
                <div className="w-full xl:w-2/3">
                    <h2 className="pt-8 pb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Entre le fourgon et le van, tout est une question de hauteur et de confort</h2>
                    <p className="indent-8">
                        Un fourgon aménagé fait en général entre 2,60 mètres et 2,90 mètres de haut, il dispose de toilettes et d’une douche. De 2 à 4 personnes, vous avez également le choix de l’implantation à l’exclusion du lit central, en bref vous aurez tout le confort d’un camping-car version compact. 
                    </p><br></br>
                    <p className="indent-8">
                        Avec une hauteur inférieure à 2 mètres les vans peuvent se faufiler partout et passent même sous les portiques des parkings. C’est un véhicule multi usage aussi bien utilisable comme véhicule de tous les jours que pour partir en road trip. Il faut savoir que les vans ne sont pas tous équipés de douches et de toilettes mais ils possèdent cependant un petit coin cuisine fixe ou amovible selon les modèles. Ils peuvent se moduler pour aller jusqu’à 4 places couchages grâce au toit relevable et au lit de banquette. Si vous avez l’esprit « vanlife » et que vous souhaitez être au plus près de la nature alors ce véhicule est fait pour vous. 
                    </p><br></br>
                    <p className="indent-8">
                        Nous pouvons rajouter à ça le fourgon 4X4, idéal si vous souhaitez sortir des sentiers battus, ce véhicule est fait pour vous ! Ces fourgons aménagés sont conçus pour les aventuriers, avec leur motorisation 4×4 ils sont faits pour aller là ou les autres ne le peuvent pas. Chez DG8 Camping-car vous trouverez le font vendome Forty van 4×4 ou encore le westfalia amundsen 540D. 
                    </p><br></br>
                </div>
                <div className="sm:hidden xl:block xl:w-1/3 pt-8">
                    <div className="rounded-xl">
                        <Image alt="Van" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/van.png"} objectFit={"contain"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full xl:w-full pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">A savoir avant l'achat de votre van ou fourgon aménagé !</h2>
                    <p className="indent-8 pl-4">
                        Comme pour le camping-car, il existe de nombreux modèles de vans et fourgons aménagés. 
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Le choix du porteur Fiat, Ford, Citroën… est important car c’est lui qui définira les équipements et la motorisation.  En fonction de votre utilisation, prenez le temps de les comparer pour trouver le véhicule le mieux adapté à vos besoins. 
                    </p><br></br>
                </div>
                <div className="w-full xl:w-full">
                    <p className="text-center font-extralight text-sm">
                        D’autres critères peuvent également rentrer en compte tels l’aménagement intérieur, l’isolation, la soute, les rangements, etc. Notre équipe commerciale se tient à votre disposition si vous souhaitez de plus amples informations.
                    </p>
                    <p className="text-center pt-8">
                        <a href="tel:+33 0969396973">
                            <button className='text-2xl text-gray-600 hover:bg-green-700 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-green-500 border-green-700 rounded-lg p-2'>
                                <div className='w-6/8'>
                                    09 69 39 69 73
                                </div>
                            </button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
  }