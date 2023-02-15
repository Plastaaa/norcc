import Image from "next/image"

export default function PoidsLourd() {
    return (
        <div className="px-8 sm:px-8 md:px-16 lg:px-32 xl:px-48 pt-16 pb-12">
            <h2 className="pb-16 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le guide du poids lourd</h2>
            {
                //<p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre soin de mon véhicule.</p>
            }
            <div className="flex flex-wrap">
                <div className="w-full xl:w-1/3">
                    <p className="indent-8">
                        Chez DG8 Camping-car nous vous proposons toute une gamme de camping-cars poids lourds. Ces véhicules spacieux et luxueux vous assureront un grand espace de vie et un confort maximum pour vos futurs voyages. Nos techniciens sont formés et nos ateliers adaptés pour assurer la réparation de ce genre de véhicule.  Notre équipe commerciale vous accompagne avant, pendant et après l’achat de votre camping-car poids lourd.                     </p>
                    <br></br>
                </div>
                <div className="sm:hidden xl:block xl:w-2/3">
                    <div className="border border-gray-400 rounded-xl">
                        <Image alt="Camping-car image" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/ccpdslourd1.png"} objectFit={"cover"} layout={"responsive"} height={75} width={300} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full pt-8">
                </div>
                <div className="sm:hidden xl:block xl:w-1/3 pt-8">
                    <div className="border border-gray-400 rounded-xl">
                        <Image alt="Niesmann ARTO" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/ccpdslourd2.webp"} objectFit={"cover"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Qu’est ce qu'un camping-car poids lourd ?</h2>
                    <p className="indent-8 pl-4">
                        Quand le poids de votre camping-car est supérieur à 3,5t il est considéré comme poids lourd. Ces véhicules disposent de plus d’espace et de rangements que les camping-cars « classique » et sont aussi plus luxueux.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Principalement de type intégral il existe aussi quelques poids lourds dans la catégorie capucine et il reste très rare chez les profilés. Les implantations restent les mêmes que celles disponibles sur un camping-car classique.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Il existe une catégorie bien distincte Les liner. Ils sont rares sur le marché il en existe quelques centaines dans toute l’Europe, c’est un véhicule qui peut être fait sur mesure, qui avoisine les 10,5 mètres de long avec un prix d’entrée à 300000€  
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Chez DG8 Camping-car c’est plus de 40 modèles poids lourd qui vous sont proposés. Nous distribuons des marques de poids lourds prestigieuses comme Carthago, Niesmann Bischoff ou encore Le Voyageur.
                    </p>
                </div>
                <div className="w-full xl:w-2/3">
                    <h2 className="pt-8 pb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Les avantages du camping-car poids lourd ?</h2>
                    <p className="indent-8">
                        L’avantage avec un poids lourd c’est sa capacité de chargement supplémentaire, vous pourrez faire installer plus d’équipements et charger plus de bagages. Vous aurez même la possibilité avec certains modèles de charger une petite voiture dans la soute-garage. La capacité de son réservoir d’eau est aussi plus conséquente ce qui vous rendra autonome plus longtemps si vous souhaitez faire du camping sauvage. Il faut savoir que 90% des camping-cars une fois chargé dépasse le PTAC autorisé de 3,5T, c’est une infraction au code de la route. Avec un camping-car poids lourd vous n’aurez plus à vous poser cette question.
                    </p><br></br>
                </div>
                <div className="sm:hidden xl:block xl:w-1/3 pt-8">
                    <div className="border border-gray-400 rounded-xl">
                        <Image alt="Controle d'humidite 1" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/ccpdslourd3.png"} objectFit={"cover"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full xl:w-1/3 px-8">
                    <h2 className="pt-8 pb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le permis de conduire nécessaire</h2>
                    <p className="indent-8">
                        Sachez que si vous avez obtenu votre permis de conduire avant le 20 janvier 1975 vous pouvez conduire un camping-car poids lourd en faisant une simple déclaration administrative.
                    </p><br></br>
                    <p className="indent-8">
                        Permis C1 : Il permet de conduire un camping-car poids lourd avec un PTAC inférieur ou égal à 7,5 tonnes. 
                    </p><br></br>
                    <p className="indent-8">
                        Permis C : Il permet de conduire un camping-car poids lourd avec un PTAC supérieur à 7,5 tonnes.
                    </p>
                </div>
                <div className="w-full xl:w-1/3 px-8">
                    <h2 className="pt-8 pb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Bon à savoir</h2>
                    <p className="indent-8">
                        Vous souhaitez passer votre véhicule léger en poids lourd ? c’est possible mais tout dépend du véhicule !
                    </p><br></br>
                    <p className="indent-8">
                        Tout d’abord vous devrez vous rapprocher du constructeur qui vous confirmera si c’est possible et vous fournira par la suite les documents nécessaires. Une fois que tout est accepté il faudra rééditer votre certificat d’immatriculation. 
                    </p><br></br>
                    <p className="indent-8">
                        Sachez que toutes nos concessions peuvent réaliser les démarches pour vous. 
                    </p><br></br>
                    <ul className="pl-8 list-disc">
                        <li>Faut-il un double essieu ? Il n’est pas nécessaire pour un 3t85 en l’occurrence à partir de 4t5 c’est indispensable pour mieux répartir la charge et avoir une meilleure motricité.</li><br></br>
                        <li>Avez-vous besoin d’un GPS spécial ?  Pour éviter toutes les mauvaises surprises et prendre les bonnes routes adaptées à votre poids lourd un GPS poids lourd est conseillé. </li>
                    </ul>
                </div>
                <div className="w-full xl:w-1/3 px-8">
                    <h2 className="pt-8 pb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le budget</h2>
                    <p className="indent-8">
                        Ces véhicules haut de gamme coûtent plus chers, les tarifs commencent à 80 000€ pour une occasion et peuvent largement dépasser les 300 000€. Découvrez nos solutions de financement pour votre futur projet.
                    </p><br></br>
                </div>
            </div>
        </div>
    )
  }