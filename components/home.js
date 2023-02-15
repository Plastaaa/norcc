import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Carou from "./carousel";
import MiniSearch from "./minisearch";
import SlideMarque from "./slideMarc";
import FourCC from "./fourcc";
import FamilleCC from "./famCC";
import Contact from "./contact";
import RachatCash from "./rachatcashImg";
import Reassurance from './reassurance';
import MetaTags from 'react-meta-tags';

export default class HomePage extends React.Component {
    render(){
        
        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="flex flex-wrap overflow-hidden">
                    <div className="my-2 w-full overflow-hidden">
                        <Carou/>
                    </div>
                    <div className="my-2 w-full overflow-hidden">
                        <div className="grid place-items-center">
                            <MiniSearch/>
                        </div>
                    </div>

                    <div className="my-2 w-full overflow-hidden">
                        <SlideMarque/>
                    </div>

                    <div className="my-2 w-full overflow-hidden">
                        <FourCC/>
                    </div>

                    <div className="my-2 w-full overflow-hidden">
                        <FamilleCC/>
                    </div>

                    <div className="my-2 w-full overflow-hidden">
                        <Reassurance/>
                    </div>

                    <div className="my-2 w-full py-16 md:w-full lg:w-1/2 xl:w-1/2 overflow-hidden">
                        <RachatCash/> 
                    </div>
                    <div className="my-2 w-full md:w-full lg:w-1/2 xl:w-1/2 overflow-hidden">
                        <Contact/>
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
            
        );
    }
}