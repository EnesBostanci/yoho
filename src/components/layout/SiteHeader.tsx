import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {BellRing,Send,Search} from 'lucide-react';

export default function SiteHeader(){
    return(
    <Container className="bg-background2" >
        <header className="flex justify-between items-center">
                <div className="my-[45px] flex justify-between items-center gap-16">
                    <Image src={"/logo.svg"} alt="site logo" width={111} height={42}/>
                    <nav className="flex gap-16  items-center">
                        <Link className="text-sm font-bold whitespace-" href={""}>About Us</Link>
                        <Link className="text-sm font-bold" href={""}>FreeLancers</Link>
                        <Link className="text-sm font-bold" href={""}>Companies</Link>
                        <Link className="text-sm font-bold text-center" href={""}>Sponsors &<br/> Development Agencies</Link>
                        <Link className="text-sm font-bold"  href={""}>Blog</Link>
                        <Link className="rounded border border-black text-sm font-bold py-2 px-4" href={""}>FAQs</Link>
                    </nav>
                </div>
                <div className="flex justify-between my-10 gap-7">
                    <div className="flex border border-black rounded-full items-center px-4">
                        <Search className="w-5 h-5 ml-5"/>
                        <input type="text" className="ml-2.5 max-w-30 font-semibold" placeholder="Search" />
                    {/* dropdown menu */}
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
    </Container>

    );
}