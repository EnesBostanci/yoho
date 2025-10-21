import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {BellRing,Send} from 'lucide-react';

export default function SiteHeader(){
    return(
    <header className="bg-background2">
        <div className="flex">
        <div className="py-[45] flex">
            <Image src={"/logo.svg"} alt="site logo" width={111} height={42}/>
            <nav>
                <Link href={""}>About Us</Link>
                <Link href={""}>FreeLancers</Link>
                <Link href={""}>Companies</Link>
                <Link href={""}>Sponsors &
                Development Agencies</Link>
                <Link  href={""}>Blog</Link>
                <Link className="rounded border" href={""}>FAQs</Link>
            </nav>
        </div>
            
        
        <div className="flex border rounded-2xl">
            <input type="text" placeholder="Search" />
            {/*  Divider lines */}
            <div className="bg-gray-300 w-px"></div>
            {/* dropdown menu */}
            <select className="border-l-4 border-black" name="" id="">
                <option value="Jobs">Jobs</option>
            </select>
            
        </div>
        <Send/>
        <BellRing />
        <Image src={"/XLarge.svg"} alt="profile pic" width={52} height={52}/>
        </div>
    </header>);
}