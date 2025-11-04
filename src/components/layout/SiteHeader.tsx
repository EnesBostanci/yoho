"use client"
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {BellRing,Send,Search,Menu,X} from 'lucide-react';
import { useState } from "react";

export default function SiteHeader(){
    const [menuOpen,setMenuOpen]=useState(false);
    function handleClick(){
        setMenuOpen((c)=> c===false?true:false);
    }
    return(
    <Container className="bg-background2">
        <header className="hidden xl:flex xl:justify-between gap-5">
            {/* desktop header */}
                <div className="my-[45px] flex justify-between gap-16 flex-1">
                    <Link href="/"><Image src={"/logo.svg"} alt="site logo" width={111} height={42}/></Link>
                    <nav className="flex items-center flex-1 justify-between">
                        <Link className="text-sm font-bold whitespace-nowrap" href={"/aboutus"}>About Us</Link>
                        <Link className="text-sm font-bold" href={""}>FreeLancers</Link>
                        <Link className="text-sm font-bold" href={""}>Companies</Link>
                        <Link className="text-sm font-bold text-center whitespace-nowrap" href={""}>Sponsors &<br/> Development Agencies</Link>
                        <Link className="text-sm font-bold"  href={""}>Blog</Link>
                        <Link className="rounded border border-black text-sm font-bold py-2 px-4" href={""}>FAQs</Link>
                    </nav>
                </div>
                <div className="flex justify-between my-10 gap-7">
                    <div className="flex border border-black rounded-full items-center px-4">
                        <Search className="w-5 h-5 ml-5"/>
                        <input type="text" className="ml-2.5 max-w-30 font-semibold" placeholder="Search" />
                        <select className="border-l-1 border-black text-sm font-bold px-6" name="" id="">
                            <option value="Jobs">Jobs</option>  
                        </select>
                    </div>
                    <div className="flex items-center gap-8">
                        <Send className="w-6 h-6"/>
                        <BellRing className="w-6 h-6"/>
                        <Image src={"/XLarge.svg"} alt="profile pic" width={52} height={52}/>
                    </div>
                </div>
        </header>
        {/* burger menu */}
        <header className="relative flex justify-between  items-center xl:hidden ">
                <Link href="/"><Image src={"/logo.svg"} alt="site logo" width={111} height={42} className="my-[45px]"/></Link>
                <Menu onClick={handleClick} className="h-6 w-6"/>
                {/* dropdown */}
                {menuOpen && 
                <div  className="flex flex-col items-center  w-fit border rounded bg-background2 px-4 absolute top-full right-0 z-50 ">
                        <X onClick={handleClick} className="self-end h-6 w-6 cursor-pointer"/>
                    <div className="w-fit">
                    <nav className="flex flex-col gap-2 items-center">
                        <Link className="text-sm font-bold whitespace-nowrap" href={"/aboutus"}>About Us</Link>
                        <Link className="text-sm font-bold" href={""}>FreeLancers</Link>
                        <Link className="text-sm font-bold" href={""}>Companies</Link>
                        <Link className="text-sm font-bold " href={""}>Sponsors & Development Agencies</Link>
                        <Link className="text-sm font-bold"  href={""}>Blog</Link>
                        <Link className="text-sm font-bold" href={""}>FAQs</Link>
                    </nav>
                    </div>
                    {/* serach and input */}
                    <div className="flex flex-col justify-between my-6 gap-4 self-center">
                    <div className="flex border border-black rounded-full items-center px-4">
                        <Search className="w-5 h-5 ml-5"/>
                        <input type="text" className="ml-2.5 max-w-30 font-semibold" placeholder="Search" />
                        <select className="border-l-1 border-black text-sm font-bold px-6" name="" id="">
                            <option value="Jobs">Jobs</option>  
                        </select>
                    </div>
                    {/* icons */}
                    <div className="flex items-center justify-between ">
                        <Send className="w-6 h-6"/>
                        <BellRing className="w-6 h-6"/>
                        <Image src={"/XLarge.svg"} alt="profile pic" width={52} height={52}/>
                    </div>
                </div>

                </div>}
        </header>
    </Container>

    );
}