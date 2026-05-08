'use client'
import Image from "next/image"
import logo from "../../public/logo.svg"
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header(){
    return (
        <div className="flex bg-[#E9ECFF] p-5 justify-between border-b border-black">
            <Link href="/" className="flex gap-1 items-center">
                <Image src={logo} alt=""></Image>
                <span className="font-bold text-[20px] text-black font-sans leading-tight tracking-tight">PrimalTraining</span>
            </Link>
            <div className="md:flex hidden gap-15 items-center text-[15px] text-black font-mono">
                <Link href="/" >HOME</Link>
                <Link href={"about"}>ABOUT</Link>
                <Link href={"book"} className="py-3 px-4 bg-[#808CFD] hover:bg-black hover:text-white transition-colors duration-300 rounded-lg">RESERVE YOUR SPOT</Link>
            </div>
            <div className="flex md:hidden">
                <Sheet >
                    <SheetTrigger asChild>
                        <Button
                        variant="ghost"
                        size="icon"
                        className="text-black"
                        >
                        <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="bg-[#E9ECFF] border-black/70 w-40 p-4 text-black"
                    >
                        <SheetHeader>
                        <SheetTitle className="text-black">Навигация</SheetTitle>
                        </SheetHeader>

                        <div className="mt-6 flex flex-col gap-6 p-4">
                            <Link href="/" >HOME</Link>
                            <Link href={"about"}>ABOUT</Link>
                            <Link href={"book"}>RESERVE YOUR SPOT</Link>
                        </div>
                    </SheetContent>
                </Sheet>
                            
            </div>
  
        </div>
    )
}