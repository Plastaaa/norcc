import React from "react";
import axios from 'axios';
import NoSearchMarque from "./search/searchResult";
import SearchFiltered from "./search/searchResultFiltered";
import phoneIMG from '../public/phone.png'
import whitephoneIMG from '../public/whitephone.png'
import Image from "next/image";

function IsSearch(props){
  if(props.affiche){
    return <NoSearchMarque/>
  }
  return (
    <SearchFiltered ccs={props.ccs}/>
  )
}

export default class Stock extends React.Component {

  state = {
    isComponentVisible: false,
  }

  componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllMarque.php?concesss=12`)
        .then(res => {
          const brands = res.data;
          this.setState({ brands });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctGamme.php?concesss=12`)
        .then(res => {
          const gammes = res.data;
          this.setState({ gammes });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctEtat.php?concesss=12`)
        .then(res => {
          const etats = res.data;
          this.setState({ etats });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctPorteur.php?concesss=12`)
        .then(res => {
          const porteurs = res.data;
          this.setState({ porteurs });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcess.php?concesss=12`)
        .then(res => {
          const concess = res.data;
          this.setState({ concess });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getNbCC.php`)
        .then(res => {
          const nb = res.data;
          this.setState({nb: nb[0].nb});
        });

        this.setState({
          affiche: true,
        }); 

        const queryParams = new URLSearchParams(window.location.search);

        const etatURL = queryParams.get('etat');
        if(etatURL == "undefined" || etatURL == "null" || etatURL == null){
          this.setState({etat: ""})
        }else{
          this.setState({etat: etatURL})
        }

        const gammeURL = queryParams.get('gamme');
        if(gammeURL == "undefined" || gammeURL == "null" || gammeURL == null){
          this.setState({gamme: ""})
        }else{
          this.setState({gamme: gammeURL})
        }

        const marqueURL = queryParams.get('marque');
        if(marqueURL == "undefined" || marqueURL == "null" || marqueURL == null){
          this.setState({marque: ""})
        }else{
          this.setState({marque: marqueURL})
        }

        const anneeMinURL = queryParams.get('anneeMin');
        if(anneeMinURL == "undefined" || anneeMinURL == "null" || anneeMinURL == null){
          this.setState({yearMin: ""})
        }else{
          this.setState({yearMin: anneeMinURL})
        }

        const anneeMaxURL = queryParams.get('anneeMax');
        if(anneeMaxURL == "undefined" || anneeMaxURL == "null" || anneeMaxURL == null){
          this.setState({yearMax: ""})
        }else{
          this.setState({yearMax: anneeMaxURL})
        }

        const porteurURL = queryParams.get('porteur');
        if(porteurURL == "" || porteurURL == "null" || porteurURL == null){
          this.setState({porteur: "0"})
        }else{
          this.setState({porteur: porteurURL})
        }
        
        const prixMinURL = queryParams.get('prixMin');
        if(prixMinURL == "undefined" || prixMinURL == "null" || prixMinURL == null){
          this.setState({prixMin: ""})
        }else{
          this.setState({prixMin: prixMinURL})
        }
        
        const prixMaxURL = queryParams.get('prixMax');
        if(prixMaxURL == "undefined" || prixMaxURL == "null" || prixMaxURL == null){
          this.setState({prixMax: ""})
        }else{
          this.setState({prixMax: prixMaxURL})
        }

        const kmMinURL = queryParams.get('kmMin');
        if(kmMinURL == "undefined" || kmMinURL == "null" || kmMinURL == null){
          this.setState({kmMin: ""})
        }else{
          this.setState({kmMin: kmMinURL})
        }


        const kmMaxURL = queryParams.get('kmMax');
        if(kmMaxURL == "undefined" || kmMaxURL == "null" || kmMaxURL == null){
          this.setState({kmMax: ""})
        }else{
          this.setState({kmMax: kmMaxURL})
        }

        const placeURL = queryParams.get('place');
        if(placeURL == "undefined" || placeURL == "null" || placeURL == null){
          this.setState({placeCG: ""})
        }else{
          this.setState({placeCG: placeURL})
        }

        const refURL = queryParams.get('ref');
        if(refURL == "undefined" || refURL == "null" || refURL == null){
          this.setState({ref: ""})
        }else{
          this.setState({ref: refURL})
        }
        
        const pageURL = queryParams.get('page');
        if(pageURL == "undefined" || pageURL == "null" || pageURL == null || pageURL == ""){
          this.setState({page: "1"})
        }else{
          this.setState({page: pageURL})
        }

        const triURL = queryParams.get('orderBy');
        if(triURL == "undefined" || triURL == "null" || triURL == null){
          this.setState({tri: ""})
        }else{
          this.setState({tri: triURL})
        }

        this.setState({concession: "Carpiquet Camping-Car"})

  }

  selectElement(id, valueToSelect){
    let element = document.getElementById(id);
    element.value = valueToSelect;
  }

  stateChange = (f) => {
      const {name, value} = f.target;
      this.setState({
        [name]: value,
      });

      this.setState({ 
        isComponentVisible: !this.state.isComponentVisible 
    }); 
  }

  stateSend = (props) => {

    window.location.replace("/stock?etat="+this.state.etat+"&gamme="+this.state.gamme+"&marque="+this.state.marque+"&anneeMin="+this.state.yearMin+"&anneeMax="+this.state.yearMax+"&porteur="+this.state.porteur+"&prixMin="+this.state.prixMin+"&prixMax="+this.state.prixMax+"&kmMin="+this.state.kmMin+"&kmMax="+this.state.kmMax+"&place="+this.state.placeCG+"&ref="+this.state.ref+"&concession="+this.state.concession+"&orderBy="+this.state.tri+"&page=1")

  }

  statePageNext = (props) => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get('page');

    var totPage = + this.state.nbCC / 20;
    if(page <= totPage){
      var newpage = +page + 1;
      window.location.replace("/stock?etat="+this.state.etat+"&gamme="+this.state.gamme+"&marque="+this.state.marque+"&anneeMin="+this.state.yearMin+"&anneeMax="+this.state.yearMax+"&porteur="+this.state.porteur+"&prixMin="+this.state.prixMin+"&prixMax="+this.state.prixMax+"&kmMin="+this.state.kmMin+"&kmMax="+this.state.kmMax+"&place="+this.state.placeCG+"&concession="+this.state.concession+"&orderBy="+this.state.tri+"&page="+newpage)
    }else{
      document.getElementById("btnNext").disabled = true;
      document.getElementById("btnNext").style.backgroundColor = 'gray'
    }
  }

  statePagePrev = (props) => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get('page');

    if(page == 1){
      null
      document.getElementById("btnPrec").disabled = true;
      document.getElementById("btnPrec").style.backgroundColor = 'gray'
    }else{
      var newpage = +page - 1;
      window.location.replace("/stock?etat="+this.state.etat+"&gamme="+this.state.gamme+"&marque="+this.state.marque+"&anneeMin="+this.state.yearMin+"&anneeMax="+this.state.yearMax+"&porteur="+this.state.porteur+"&prixMin="+this.state.prixMin+"&prixMax="+this.state.prixMax+"&kmMin="+this.state.kmMin+"&kmMax="+this.state.kmMax+"&place="+this.state.placeCG+"&concession="+this.state.concession+"&orderBy="+this.state.tri+"&page="+newpage)
    }
  }

  state = {
      ccs: [],
      brands: [],
      gammes: [],
      refs: [],
      etats: [],
      porteurs: [],
      affiche: true,
      ccs2: [],
      concess: [],
  }

    render() {
      
        return (
          <div>
            <div className="flex flex-wrap">
              {
              <div className="w-full lg:w-1/5 px-16 pt-8 pb-8 md:px-48 md:pt-8 md:pb-8 lg:pl-4 lg:pt-4 lg:pr-4">
                <div className="sticky top-6 flex flex-wrap overflow-hidden border border-gray-200 rounded-lg shadow-lg">
                  <div className="w-full overflow-hidden">
                    <h1 className="text-center pt-4 pb-4 text-2xl font-bold">
                      Rechercher : 
                    </h1>
                  </div>

                  <div className="w-full overflow-hidden p-4">
                    <div className="flex flex-wrap -mx-1 overflow-hidden">

                      <div className="my-1 px-1 w-full">
                        <form>
                          <label>
                              <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.marque} id="marque" name="marque" onChange={this.stateChange}>
                                  <option value="0">Choisir la marque</option>
                                  {
                                      this.state.brands.map(marques => 
                                          <option value={marques.marque}>{marques.marque}</option>
                                      )
                                  }
                              </select>
                          </label>
                        </form>
                      </div>

                      <div className="my-1 px-1 w-full">
                        <form>
                          <label>
                              <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.gamme} name="gamme" onChange={this.stateChange}>
                                  <option value="0">Choisir la gamme</option>
                                  <option key={"Fourgon"} value={"Fourgon"}>Fourgon</option>
                                  <option key={"Profile"} value={"Profile"}>Profile</option>
                                  <option key={"Van"} value={"Van"}>Van</option>
                                  <option key={"Intégral"} value={"Intégral"}>Intégral</option>
                                  <option key={"Capucine"} value={"Capucine"}>Capucine</option>
                              </select>
                          </label>
                        </form>
                      </div>

                      <div className="my-1 px-1 w-full">
                        <form>
                          <label>
                              <select id="etat" className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.etat} name="etat" onChange={this.stateChange}>
                                  <option value="0">Etat</option>
                                  {
                                      this.state.etats.map(etats => 
                                          <option value={etats.etat}>{etats.etat}</option>
                                      )
                                  }
                              </select>
                          </label>
                        </form>
                      </div>
                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="Année min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.yearMin} type="text" id="anneeMin" name="yearMin" onChange={this.stateChange}/>
                      </div>

                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="Année max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.yearMax} type="text" name="yearMax" onChange={this.stateChange}/>
                      </div>

                      

                      <div className="my-1 px-1 w-full">
                        <form>
                          <label>
                              <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.porteur} name="porteur" onChange={this.stateChange}>
                                  <option value="0">Choix du porteur</option>
                                  <option value={"Fiat"}>Fiat</option>
                                  <option value={"Citroen"}>Citroen</option>
                                  <option value={"Ford"}>Ford</option>
                                  <option value={"Mercedes"}>Mercedes</option>
                                  <option value={"Renault"}>Renault</option>
                                  <option value={"Peugeot"}>Peugeot</option>
                                  <option value={"Toyota"}>Toyota</option>
                                  <option value={"Volkswagen"}>Volkswagen</option>
                                  <option value={"Opel"}>Opel</option>
                                  <option value={"Caravane"}>Caravane</option>
                              </select>
                          </label>
                        </form>
                      </div>

                      
                      
                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="Prix minimal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.prixMin} type="text" name="prixMin" onChange={this.stateChange}/>
                      </div>

                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="Prix maximal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.prixMax} type="text" name="prixMax" onChange={this.stateChange}/>
                      </div>

                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="KM min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.kmMin} type="text" name="kmMin" onChange={this.stateChange}/>
                      </div>

                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="KM max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.kmMax} type="text" name="kmMax" onChange={this.stateChange}/>
                      </div>

                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="Places carte grise" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.placeCG} type="text" name="placeCG" onChange={this.stateChange}/>
                      </div>
                      <div className="my-1 px-1 w-1/2">
                        <input placeholder="Réference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="ref" value={this.state.ref} onSubmit={this.stateChange} onChange={this.stateChange}/>
                      </div>
                      <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 my-1 px-1">
                              <form>
                                <label>
                                    <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" value={this.state.tri} name="tri" onChange={this.stateChange}>
                                        <option value="0">Trier</option>
                                        <option value="ASC">Prix croissant</option>
                                        <option value="DESC">Prix décroissant</option>
                                    </select>
                                </label>
                              </form>
                            </div>
                            <div className="w-1/2 my-1 px-1">
                              <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-lg" onClick={this.stateSend}>
                                Rechercher
                              </button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
              {
                <div className="container mx-auto w-full lg:w-4/5">
                  {
                  <div className="container mx-auto w-full">
                    <div>
                      {
                        <IsSearch affiche={this.state.affiche} ccs={this.state.ccs2}/>
                      }
                    </div>
                    <div className="flex flex-wrap">
                      <div className="px-8 pb-8 pt-4 w-1/3">
                        <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-lg" id="btnPrec" onClick={this.statePagePrev}>
                          Page précédente
                        </button>
                      </div>
                      <div className="px-8 pb-8 pt-4 w-1/3">
                        <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-lg" disabled id="nbcc">
                          {this.state.nb} résultats
                        </button>
                      </div>
                      <div className="px-8 pb-8 pt-4 w-1/3">
                        <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-lg" id="btnNext" onClick={this.statePageNext}>
                          Page suivante
                        </button>
                      </div>
                    </div>                    
                  </div>
                  }
                </div>
              }
          </div>
        </div>
      );
    }
  }