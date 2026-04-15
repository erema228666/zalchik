import Image from "next/image";
import logo from '../../public/logo.svg'
import Link from "next/link";
import { db } from "@/server/db";
import { SocialLinks } from "@/server/db/schema";

export default async function Podval() {
    const contacts = await db.query.contact.findMany();
    const socials = await db.query.SocialLinks.findMany();
    const openhours = await db.query.OpeningHours.findMany();
    return (
        <div className="flex flex-col bg-[#E9ECFF] px-5 lg:px-30 py-7 pb-13 text-black border-t">
            <div className="flex flex-col md:gap-30 gap-20 w-full items-center">
                <div className="lg:flex md:flex justify-between w-full gap-7 md:gap-0">
                    <Link href="/"><Image src={logo} alt="" className="w-[230px] h-[136px]"></Image></Link>
                    <Link href="/"><span className="font-sans text-black font-bold text-[52px] md: -tracking-[0.05em]">PrimalTraining</span></Link>
                </div>
                <div className="flex md:flex-row md:justify-between w-full flex-col gap-10 md:gap-0">
                    <div className="flex flex-col gap-4 font-anek-tamil">
                        <p className=" text-[22px] tracking-[-0.03em] font-bold">CONTACT</p>
                        {contacts.map((contact) => (
                            <span key={contact.id} className="font-bold leading-[0.3] tracking-[0.01em]">
                                {contact.name}: {contact.contact}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 font-anek-tamil">
                        <p className="text-[22px] tracking-[-0.03em] font-bold">OPENING HOURS</p>
                        <div className="flex flex-col font-bold -tracking-[0.01em] w-[247px] justify-between">
                            {openhours.map((x) => (
                                <div key={x.id} className="flex justify-between w-full">
                                    <p>{x.day}</p>
                                    <p>{x.open}:00 - {x.close}:00</p>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 font-anek-tamil">
                        <p className="font-anek-tamil text-[22px] tracking-[-0.03em] font-bold">SOCIAL</p>
                        {socials.map((SocialLinks) => (
                            <Link href={SocialLinks.link} key={SocialLinks.id} className="underline leading-[0.3] font-bold -tracking-[0.01em]">
                                {SocialLinks.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}