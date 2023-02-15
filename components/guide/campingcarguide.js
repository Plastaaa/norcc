import Image from "next/image"

export default function PoidsLourd() {
    return (
        <div className="px-8 sm:px-8 md:px-16 lg:px-32 xl:px-48 pt-16 pb-12">
            <h2 className="pb-16 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le guide du camping-car</h2>
            {
                //<p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre soin de mon véhicule.</p>
            }
            <div className="flex flex-wrap">
                <div className="w-full xl:w-2/3">
                    <p className="indent-8">
                        L’avantage de partir en camping-car est que vous pouvez partir ou vous voulez et quand vous voulez ! Fini les contraintes horaires et le stress de réserver vos vacances 3 mois à l’avance. Il existe de nombreux avantages concernant le choix de ce type de vacances :
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Le confort et l’espace, selon les modèles vous pourrez voyager jusqu’à 7 personnes, la moyenne étant de 4 personnes. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Vous êtes chez vous partout, même au bout du monde. Votre maison est à portée de main, vous n’êtes plus obligé de faire un choix entre le vélo et les valises vous pouvez tout emmener. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Un mode de voyage économique. Avec un camping-car vous avez l’hôtel, le transport et la restauration dans un seul véhicule. 
                    </p>
                    <br></br>
                    <p className="indent-8">
                        L’esprit camping-car c’est aussi appartenir à une grande famille et bénéficier de bons plans et astuces pour organiser des voyages inoubliables.
                    </p>
                    <br></br>
                    <p className="indent-8">
                        Chez DG8 Camping-car c’est plus de 200 camping-cars neufs et d’occasion qui vous sont proposés. 
                    </p>
                    <ul className="list-disc pl-16">
                        <li>Découvrez nos occasions prêtes à partir, révisées et garanties</li>
                        <li>Plus de 30 marques distribuées </li>
                    </ul>
                </div>
                <div className="sm:hidden xl:block xl:w-1/3">
                    <div className="border border-gray-400 rounded-xl">
                        <Image alt="Camping-car image" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/ccpdslourd1.png"} objectFit={"cover"} layout={"responsive"} height={200} width={300} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full pt-8">
                </div>
                <div className="sm:hidden xl:block xl:w-1/3 pt-8">
                    <div className="rounded-xl">
                        <Image alt="Niesmann ARTO" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/ccprofile.png"} objectFit={"contain"} layout={"responsive"} height={100} width={200} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">C'est le camping-car préféré des français : le profilé</h2>
                    <p className="indent-8 pl-4">
                        Compact et disponible avec de multiples configurations (lit jumeaux, doubles, central..).
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        De 4 à 6 personnes il est idéal pour partir en famille ou entre amis.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        A la différence d’un intégral, le profilé est composé d’une cabine d’utilitaire à laquelle est ajouté une cellule. Son gabarit se situe en moyenne entre 6 et 7 mètres et son prix moyen est de 40 000 à 60 000€. 
                    </p><br></br>
                </div>
                <div className="w-full xl:w-2/3">
                    <h2 className="pt-8 pb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Facile à reconnaître avec sa grande casquette : la capucine</h2>
                    <p className="indent-8">
                        Disposant d’un grand lit double au-dessus du poste conducteur elle est parfaitement adaptée pour une famille nombreuse. Bien que plus haute que la moyenne et moins économique pour ce qui est de la consommation en carburant elle continue cependant à séduire !
                    </p><br></br>
                    <p className="indent-8">
                        Sur 2021 de nombreux constructeurs comme Chausson ou Benimar proposent des modèles capucine avec des configurations différentes pour que chacun y trouve son bonheur !
                    </p><br></br>
                    <p className="indent-8">
                        Son gabarit se situe en moyenne entre 6 et 7,50 mètres et son prix moyen est de 50 000€. 
                    </p><br></br>
                </div>
                <div className="sm:hidden xl:block xl:w-1/3">
                    <div className="rounded-xl">
                        <Image alt="Controle d'humidite 1" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/cccapu.png"} objectFit={"contain"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="sm:hidden xl:block xl:w-1/3">
                    <div className="rounded-xl">
                        <Image alt="Niesmann ARTO" src={"https://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/GUIDE/ccintegral.png"} objectFit={"contain"} layout={"responsive"} height={150} width={250} className={'rounded-xl'}/>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Envie de plus d'espace et de confort ? L'intégral !</h2>
                    <p className="indent-8 pl-4">
                        Envie de plus d’espace et de confort ? Alors le camping-car intégral est fait pour vous !
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Avec son grand pare-brise vous disposerez d’une belle vue panoramique, son lit central et son lit pavillon pourront vous permettre de voyager à plusieurs sans contrainte.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Prenez en compte aussi le fait que de nombreux intégraux sur le marché nécessitent le permis poids lourd.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        En général, plus onéreux, son prix peut varier de 60 000€ à plus de 200 000 € pour les modèles haut de gamme que l’on peut découvrir chez des constructeurs comme Le Voyageur, Niesmann Bischoff ou encore Carthago. 
                    </p><br></br>
                </div>
                <div className="w-full">
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
                <div className="w-full pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Comment savoir quel camping-car est fait pour vous ?</h2>
                    <p className="indent-8 pl-4">
                        De 2 à 4 personnes en s’assurant un maximum de confort. Optez pour un profilé ou un intégral. La différence entre les deux sera le prix mais aussi l’espace et les rangements qui seront plus spacieux dans un intégral. 
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Au-delà de 4 personnes, la capucine sera le camping-car le mieux adapté pour vous. 
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Si vous hésitez entre un camping-car neuf ou d’occasion ?
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Avec un camping-car neuf vous avez l’avantage de pouvoir le configurer comme vous le souhaitez de plus vous n’aurez pas à vous soucier des problématiques techniques ou autre il est prêt à prendre la route. Le seul bémol par rapport à une occasion c’est son prix qui est souvent plus élevé. 
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Si vous choisissez un camping-car d’occasion il faut prendre en compte que chaque camping-car d’occasion est unique, il a été configuré en fonction des besoins de l’ancien propriétaire. Pour vous éviter les mauvaises surprises il est préférable de passer directement par un professionnel.
                    </p><br></br>
                    <p className="indent-8 pl-4 font-bold">
                        Chez DG8 Camping-car nous vous proposons des camping-cars d’occasion révisés et garantis. 
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Quoi qu’il en soit si vous avez encore des doutes nos équipes sont à votre disposition pour répondre à toutes vos questions.
                    </p><br></br>
                </div>
                <div className="w-full md:w-1/2 pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Un camping-car est-il utilisable toute l'année ?</h2>
                    <p className="indent-8 pl-4">
                        Vous pouvez partir tout au long de l’année avec votre camping-car.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Il faudra cependant bien prendre en compte que certains modèles sont plus adaptés à affronter le grand froid que d’autres. Si vous êtes un habitué des montagnes et des températures inférieures à zéro il faudra opter pour un camping-car bien isolé et penser à vous équiper de tout le matériel nécessaire pour une isolation optimale comme par exemple des bâches qui s’appliquent sur le pare-brise ou les vitres.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Cela permet de diminuer l’entrée du froid. A contrario si vous souhaitez passer plus de temps dans les pays chauds, pour plus de confort optez pour un camping-car avec climatisation porteur et équipé d’un store extérieur pour profiter au maximum des belles journées ensoleillées. 
                    </p><br></br>
                </div>
                <div className="w-full md:w-1/2 pt-8">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Le budget</h2>
                    <p className="indent-8 pl-4">
                        La fourchette de prix est assez large et variera en fonction d’un modèle neuf ou d’occasion et en fonction du type de camping-car. De 15 000 € à plus de 200 000€ vous devriez trouver votre bonheur.
                    </p><br></br>
                    <p className="indent-8 pl-4">
                        Sachez qu’il existe aussi des solutions de financement pour vous aider à financer votre projet.
                    </p><br></br>
                </div>
            </div>
        </div>
    )
  }