import logo from "../../public/logo.svg"
import Image from "next/image"

export default function Header(){
    return (
        <div className="flex bg-[#E9ECFF] p-5 justify-between border-b border-black">
            <div className="flex gap-1 items-center">
                <Image src={logo} alt=""></Image>
                <span className="font-bold text-[20px] text-black font-sans leading-tight tracking-tight">PrimalTraining</span>
            </div>
            <div className="flex gap-15 items-center text-[15px] text-black font-mono">
                <span>HOME</span>
                <span>ABOUT</span>
                <button className="py-3 px-4 bg-[#808CFD] hover:bg-black hover:text-white transition-colors duration-300 rounded-lg">RESERVE YOUR SPOT</button>
            </div>
        </div>
    )
}