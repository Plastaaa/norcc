import Image from 'next/image';
import logoImg from '../public/logo/concess/nordcc.png'
import logo2 from '../public/logo/concess/nordcc.png';

export default function CardImage(){
    return (
        <div className="cardImageWrapper">
            <a className="block dark:hidden text-2xl font-semibold" href="/">
                <Image alt='Logo DG8CC' src={logoImg} height={80} width={80} layout="intrinsic"/>
            </a>
            <a className="hidden dark:block text-2xl font-semibold" href="/">
                <Image alt='Logo DG8CC DARK' src={logo2} height={80} width={80} layout="intrinsic"/>
            </a>
        </div>
    )
}