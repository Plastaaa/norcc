import ConcessionUnique from "../components/cu"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect } from 'react';

export default function Home(props){
    return (
        <div>
            <div>
            {
                <NavBar/>
            }
            </div>
            <ConcessionUnique/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}