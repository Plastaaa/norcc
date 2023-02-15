import Image from "next/image"

export default function ConcessCard(props) {
    return (  
        <div className="px-4 flex flex-wrap">
            <div className="">
                <a href={props.linkMarque}>
                    <div className="p-8 flex flex-wrap border border-gray-100 shadow-lg rounded-3xl">
                        <div className="w-full">
                            <div className="flex flex-wrap h-80">
                                <div className="w-full h-24">
                                    <Image src={props.linkIMG} alt="me" layout="responsive" height={70} width={250}/>
                                </div>
                                <div className="w-full">
                                    <p className="text-xl font-bold">
                                        {props.marque}
                                    </p>
                                    <p className="px-2 font-thin">
                                        {props.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}