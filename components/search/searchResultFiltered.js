import React from "react";
import CardCC from "../cardCC";

export default function SearchFiltered(props) {
    return (
        <div>
            <div className="flex flex-wrap overflow-hidden">
                <div className="w-full overflow-hidden">
                    <div className="flex flex-wrap -mx-1 overflow-hidden">
                        {
                            props.ccs.map(cc =>
                                <div className="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                    <CardCC 
                                        refe={cc.RefDMS}
                                        marque={cc.marque} 
                                        modele={cc.modele} 
                                        ver={cc.ver}
                                        prix={cc.prixTTC} 
                                        photo={cc.linkIMG} 
                                        km={cc.kilometrage} 
                                        bdv={cc.boitedevitesse}
                                        etat={cc.etat}
                                        famille={cc.famille}
                                        gamme={cc.gamme}
                                        annee={cc.année}
                                        premiereMain={cc.premiereMain}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}