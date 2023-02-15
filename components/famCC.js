import React from "react"
import axios from "axios";
import CardCC from "./cardCC";
import img1 from '../public/profile.jpeg';
import Image from "next/image";
import profileicon from '../public/icon/profileicon.png'
import fourgonicon from "../public/icon/fourgonicon.png"
import capucineicon from "../public/icon/capucineicon.png"
import vanicon from "../public/icon/vanicon.png"
import integralicon from "../public/icon/integralicon.png"
import ccicon from "../public/icon/ccicon.png"
import whiteprofileicon from '../public/icon/whiteprofileicon.png'
import whitefourgonicon from "../public/icon/whitefourgonicon.png"
import whitecapucineicon from "../public/icon/whitecapucineicon.png"
import whitevanicon from "../public/icon/whitevanicon.png"
import whiteintegralicon from "../public/icon/whiteintegralicon.png"
import whiteccicon from "../public/icon/whiteccicon.png"

export default class MiniSearch extends React.Component {
    componentDidMount(){
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/get4CC.php`)
            .then(res => {
                const ccs = res.data;
                this.setState({ ccs });
            });
    }

    state = {
        ccs: [],
    }
    
    render(){
        return (
            <div className="px-10 sm:px-10 md:px-20 lg:px-28 flex flex-wrap -mx-2 overflow-hidden">
                    <div className="pb-4 my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=profile&page=1' className="border c-card block bg-white dark:bg-gray-800 shadow-md dark:border-gray-500 hover:shadow-lg rounded-lg overflow-hidden">
                            <div>
                                <div className="p-4 flex flex-wrap">
                                    <div className="w-1/2">
                                        <h2 className="mt-2 mb-2  font-bold">
                                            Profilé
                                        </h2>
                                        <p className="text-sm">
                                            Nos camping-cars profilé.
                                        </p>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="hidden dark:block">
                                            <Image className={"rounded-xl"} src={whiteprofileicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                        </div>
                                        <div className="block dark:hidden">
                                            <Image className={"rounded-xl"} src={profileicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pb-4 my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=capucine&page=1' className="border c-card block bg-white dark:bg-gray-800 shadow-md dark:border-gray-500 hover:shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4 flex flex-wrap">
                                <div className="w-1/2">
                                    <h2 className="mt-2 mb-2  font-bold">
                                        Capucine
                                    </h2>
                                    <p className="text-sm">
                                        Nos camping-cars capucine.
                                    </p>
                                </div>
                                <div className="w-1/2">
                                    <div className="block dark:hidden">
                                        <Image className={"rounded-xl"} src={capucineicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                    <div className="hidden dark:block">
                                        <Image className={"rounded-xl"} src={whitecapucineicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pb-4 my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=integral&page=1' className="border c-card block bg-white dark:bg-gray-800 shadow-md dark:border-gray-500 hover:shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4 flex flex-wrap">
                                <div className="w-1/2">
                                    <h2 className="mt-2 mb-2 font-bold">
                                        Intégral
                                    </h2>
                                    <p className="text-sm">
                                        Nos camping-cars intégral.
                                    </p>
                                </div>
                                <div className="w-1/2">
                                    <div className="block dark:hidden">
                                        <Image className={"rounded-xl"} src={integralicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                    <div className="hidden dark:block">
                                        <Image className={"rounded-xl"} src={whiteintegralicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pb-4 my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=fourgon&page=1' className="border c-card block bg-white dark:bg-gray-800 shadow-md dark:border-gray-500 hover:shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4 flex flex-wrap">
                                <div className="w-1/2">
                                    <h2 className="mt-2 mb-2  font-bold">
                                        Fourgon
                                    </h2>
                                    <p className="text-sm">
                                        Nos fourgons.
                                    </p>
                                </div>
                                <div className="w-1/2">
                                    <div className="block dark:hidden">
                                        <Image className={"rounded-xl"} src={fourgonicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                    <div className="hidden dark:block">
                                        <Image className={"rounded-xl"} src={whitefourgonicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>                                
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pb-4 my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=van&page=1' className="border c-card block bg-white dark:bg-gray-800 shadow-md dark:border-gray-500 hover:shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4 flex flex-wrap">
                                <div className="w-1/2">
                                    <h2 className="mt-2 mb-2  font-bold">
                                        Van
                                    </h2>
                                    <p className="text-sm">
                                        Nos vans.
                                    </p>
                                </div>
                                <div className="w-1/2">
                                    <div className="block dark:hidden">
                                        <Image className={"rounded-xl"} src={vanicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                    <div className="hidden dark:block">
                                        <Image className={"rounded-xl"} src={whitevanicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pb-4 my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?page=1' className="border c-card block bg-white dark:bg-gray-800 dark:border-gray-500 shadow-sm hover:shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4 flex flex-wrap">
                                <div className="w-1/2">
                                    <h2 className="mt-2 mb-2  font-bold">
                                        Camping-car
                                    </h2>
                                    <p className="text-sm">
                                        Nos camping-cars.
                                    </p>
                                </div>
                                <div className="w-1/2">
                                    <div className="block dark:hidden">
                                        <Image className={"rounded-xl"} src={ccicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                    <div className="hidden dark:block">
                                        <Image className={"rounded-xl"} src={whiteccicon} width={120} height={60} objectFit={"initial"} alt={"Image camping car"} layout={"responsive"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
        )
    }
}



