import Image from "next/image";
import logo from '../../public/logo.svg'
import Link from "next/link";

export default function Podval() {
    return (
        <div className="flex flex-col gap-42 bg-[#E9ECFF] px-5 py-7 text-black">
            <div className="flex justify-between items-center">
                <Image src={logo} alt="" className="w-[230px] h-[136px]"></Image>
                <span className="font-sans text-black font-bold text-[52px]">PrimalTraining</span>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">CONTACT</p>
                    <span className="text-[14px] font-bold font-mono tracking-[0.01em]">с бд</span>
                </div>
                <div className="flex flex-col">
                    <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">OPENING HOURS</p>
                    <div className="flex justify-between text-[14px] font-bold font-mono tracking-[0.01em]">
                        <span>1</span>
                        <span>2</span>
                    </div>
                </div>
                <div>
                    <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">SOCIAL</p>
                    <Link href="" className="text-[14px] font-bold font-mono tracking-[0.01em]">с бд</Link>
                </div>

            </div>
        </div>
    )
}