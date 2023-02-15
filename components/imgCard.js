import Image from 'next/image';
import React from 'react';

export default function imgCard(props) {
    const [src, setSrc] = React.useState(props.link);

    return (
        <div className="cardImageWrapper">
            {
            <Image 
                src={props.link} 
                objectFit={"cover"} 
                layout={"responsive"} 
                height={800} 
                width={1000}
                quality={100}
                className={'rounded-xl'}
                placeholder={"blur"}
                blurDataURL={"/asset/error/blur.png"}
                loading={"lazy"}
            />
            }
        </div>
    )
}