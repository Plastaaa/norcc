import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home(){
    return (
      <div>
        <title>DG8 Camping-cars - Contact Administrateur</title>
        <div>
                {
                    <NavBar/>
                }
            </div>
        <h1 className="flex">Merci de contacter l'administrateur.</h1>
        <div>
                <Footer/>
            </div>
      </div>
    )
}