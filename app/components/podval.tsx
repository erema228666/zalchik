import Image from "next/image";
import logo from '../../public/logo.svg'
import Link from "next/link";

export default function Podval() {
    return (
        <div className="flex flex-col  bg-[#E9ECFF] px-5 py-7 pb-13 text-black">
            <div className="flex flex-col md:gap-42 gap-20 w-full items-center">
                <div className="flex flex-col md:flex-row justify-between lg:max-w-[1280px] w-full gap-7 md:gap-0">
                    <Image src={logo} alt="" className="w-[230px] h-[136px]"></Image>
                    <span className="font-sans text-black font-bold text-[52px] -tracking-[0.05em]">PrimalTraining</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between lg:max-w-[1280px] w-full gap-10 md:gap-0">
                    <div className="flex flex-col gap-4">
                        <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">CONTACT</p>
                        <span className="text-[14px] font-bold font-mono tracking-[0.01em]">с бд</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">OPENING HOURS</p>
                        <div className="flex text-[14px] font-bold font-mono -tracking-[0.01em] w-[247px] justify-between">
                            <span>MON – FRI</span>
                            <span>5:00 – 23:00</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">SOCIAL</p>
                        <Link href="" className="text-[14px] font-bold font-mono -tracking-[0.01em]">с бд</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}