import Image from "next/image"
import ContactEvent from '../contactEvent'

export default function Venture() {
    return (
        <div className="px-4 md:px-12 pb-12 pt-8">
            <div className="flex flex-wrap shadow-lg border border-gray-100 rounded-2xl pb-4">
                <div className="w-full">
                    <h2 className="pb-4 pt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-8 pt-8">Visite des coulisses de la Foire de Caen avec Thierry BOUTELET !</h2>
                </div>
                <div className="w-full px-12 pb-2">
                    <iframe
                        style={{
                            width: "100%",
                            backgroundColor: "#ccc",
                            borderRadius: "16px",
                            height: "50vw",
                        }}
                        src={`https://www.youtube.com/embed/xlGP5FHn_Mw`}
                    /> 
                </div>
                <div className="w-full px-12 pb-2">
                    <h2 className="pb-4 pt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-8 pt-8">Pour demander plus d'informations !</h2>
                    <div className="px-8">
                        <div className="w-full py-3 px-8 text-sm font-medium text-center text-black rounded-lg bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <label htmlFor="my-modal-3" className="bg-green-800 hover:bg-green-700 text-center text-white w-full font-bold py-2 px-4 rounded-lg">Me faire recontacter</label>
                        </div>

                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <ContactEvent/>
                            </div>
                        </div>
                    </div><br></br>
                </div>
            </div>
        </div>
    )
}