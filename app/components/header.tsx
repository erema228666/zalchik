
import Image from "next/image"
import logo from "../../public/logo.svg"
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export default function Header(){
    return (
        <div className="flex bg-[#E9ECFF] p-5 justify-between border-b border-black">
            <div className="flex gap-1 items-center">
                <Image src={logo} alt=""></Image>
                <span className="font-bold text-[20px] text-black font-sans leading-tight tracking-tight">PrimalTraining</span>
            </div>
            <div className="md:flex hidden gap-15 items-center text-[15px] text-black font-mono">
                <span>HOME</span>
                <Link href={'/about'}>ABOUT</Link>
                <button className="py-3 px-4 bg-[#808CFD] hover:bg-black hover:text-white transition-colors duration-300 rounded-lg">RESERVE YOUR SPOT</button>
            </div>
            <AiOutlinePlus className="flex md:hidden size-8"/>
        </div>
    )
}