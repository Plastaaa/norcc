import Image from "next/image"
import atelierIMG from '../public/reass/atelier.png'
import atelierIMGDark from '../public/reass/whiteatelier.png'
import teamIMG from '../public/reass/team.png'
import teamIMGDark from '../public/reass/whiteteam.png'
import garantieIMG from '../public/reass/shield.png'
import garantieIMGDark from '../public/reass/whiteshield.png'
import tirelireIMG from '../public/reass/tirelire.png'
import tirelireIMGDark from '../public/reass/whitetirelire.png'
import cleIMG from '../public/reass/cle.png'
import cleIMGDark from '../public/reass/whitecle.png'
import accessIMG from '../public/reass/acces.png'
import accessIMGDark from '../public/reass/whiteacces.png'

export default function Home(){
    return (
        <div>
            <div className='flex flex-wrap'>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 lg p-16">
                    <div class="w-full max-w-sm dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <div className="block dark:hidden">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={atelierIMG} alt="Nos ateliers"/>
                            </div>
                            <div className="hidden dark:block">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={atelierIMGDark} alt="Nos ateliers"/>
                            </div>
                            <h5 class="mb-1 text-2xl font-medium dark:text-white text-gray-900 pt-4">Nos ateliers</h5>
                            <p class="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">Nos ateliers vous garantissent l'utilisation de pièces d'origine, testées, contrôlées et homologuées vous permettant de bénéficier de la garantie constructeur.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 lg p-16">
                    <div class="w-full max-w-sm dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <div className="block dark:hidden">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={teamIMG} alt="Notre équipe"/>
                            </div>
                            <div className="hidden dark:block">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={teamIMGDark} alt="Notre équipe"/>
                            </div>
                            <h5 class="mb-1 text-2xl font-medium dark:text-white text-gray-900 pt-4">Nos équipes</h5>
                            <p class="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">Nos équipes sont à votre écoute pour vous garantir la meilleure expérience en magasin et par téléphone.</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 lg p-16">
                    <div class="w-full max-w-sm dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <div className="block dark:hidden">
                                <Image className="mb-3 shadow-lg" width={28} height={36} src={garantieIMG} alt="Bonnie image"/>
                            </div>
                            <div className="hidden dark:block">
                                <Image className="mb-3 shadow-lg" width={28} height={36} src={garantieIMGDark} alt="Bonnie image"/>
                            </div>
                            <h5 class="mb-1 text-2xl font-medium dark:text-white text-gray-900 pt-4">Garantie incluse</h5>
                            <p class="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">Nos véhicules sont garantis pour minimum 6 mois jusqu'à 2 ans. (selon l'ancienneté du véhicule)</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 lg p-16">
                    <div class="w-full max-w-sm dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <div className="block dark:hidden">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={tirelireIMG} alt="Bonnie image"/>
                            </div>
                            <div className="hidden dark:block">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={tirelireIMGDark} alt="Bonnie image"/>
                            </div>
                            <h5 class="mb-1 text-2xl font-medium dark:text-white text-gray-900 pt-4">Financement sur mesure</h5>
                            <p class="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">DG8 Camping-car vous propose des mensualités adaptées à votre budget.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 lg p-16">
                    <div class="w-full max-w-sm dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <div className="block dark:hidden">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={cleIMG} alt="Bonnie image"/>
                            </div>
                            <div className="hidden dark:block">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={cleIMGDark} alt="Bonnie image"/>
                            </div>
                            <h5 class="mb-1 text-2xl font-medium dark:text-white text-gray-900 pt-4">Location</h5>
                            <p class="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">Un service de location performant et accessible vous permettant de partir en vacances avec nos véhicules de loisirs.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 lg p-16">
                    <div class="w-full max-w-sm dark:border-gray-700">
                        <div class="flex flex-col items-center pb-10">
                            <div className="block dark:hidden">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={accessIMG} alt="Bonnie image"/>
                            </div>
                            <div className="hidden dark:block">
                                <Image className="mb-3 shadow-lg" width={36} height={36} src={accessIMGDark} alt="Bonnie image"/>
                            </div>
                            <h5 class="mb-1 text-2xl font-medium dark:text-white text-gray-900 pt-4">Accessoires</h5>
                            <p class="mb-3 font-normal text-gray-500 text-center dark:text-gray-400">Nos magasiniers sont à votre disposition et vous proposent un large choix d'accessoires et d'équipements pour votre véhicule de loisir.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}