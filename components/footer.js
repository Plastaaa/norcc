
export default function Footer() {
    var date = new Date();
        return (
            
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://dg8campingcar.com" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DG8 Camping-car</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="./a-propos" className="mr-4 hover:underline md:mr-6 ">A propos</a>
                        </li>
                        <li>
                            <a href="./contact" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                        <li>
                            <a href="./mentions-legales" className="mr-4 hover:underline">Mentions Légales</a>
                        </li>
                        <li>
                            <label htmlFor="my-modal-4" className=" hover:underline">
                                Cookies
                            </label>
                            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                                <label className="modal-box relative" for="">
                                <h3 className="text-lg font-bold">Notre politique en matière de cookies !</h3>
                                <p className="py-4">
                                    Sur nos sites les cookies sont limités à la génération de statistiques afin de toujours vous proposer la meilleure expérience de navigation en continu.
                                </p>
                                </label>
                            </label>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {date.getFullYear()} <a href="https://dg8campingcar.com" className="hover:underline">Groupe David Gerbier™</a>. Tous droits réservés.
                </span>
            </footer>

        )
    }