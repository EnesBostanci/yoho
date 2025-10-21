import Container from "@/components/Container";
import Image from "next/image"
import Link from "next/link";
export default function SiteFooter(){
    const followUs=[
        {src:"Facebook.png",width:37,alt:"facebook",height:37},
        {src:"Linkedin.png",width:37,alt:"linkedin",height:37},
        {src:"Twitter.png",width:37,alt:"twitter",height:37},
        {src:"Instagram.png",width:37,alt:"instagram",height:37},
        {src:"Youtube.png",width:37,alt:"youtube",height:37},
    
    ]
    const headers_class="font-bold leading-7 text-lg font-lexend text-white";
    const items_class="";
    return(
     
        <footer className="bg-primary4 rounded-t-4xl">
            <Container> 
                <div className="flex mx-auto">  
                    <div>
                            <h2 className={headers_class}>Freelancers</h2>
                            {/* divider */}
                            <div className="h-1 w-16 bg-white"></div>
                            <ul>
                                <li className="leading-9 text-white"><Link href={""}>How to start</Link></li>
                                <li><Link href={""}>YohoWork Academy</Link></li>
                                <li><Link href={""}>Find freelance jobs worldwide</Link></li>
                            </ul>
                    </div>
                        <div>
                            <h2 className={headers_class}>Companies</h2>
                            {/* divider */}
                            <div></div>
                            <ul>
                                <li><Link href={""}>How to hire</Link></li>
                                <li><Link href={""}>Job posting guide</Link></li>
                                <li><Link href={""}>Payment and security</Link></li>
                                <li><Link href={""}>Hire in crisis countries</Link></li>
                            </ul>

                        </div>
                        <div>
                            <h2 className={headers_class}>Sponsors</h2>
                            {/* divider */}
                            <div></div>
                            <ul>
                                <li><Link href={""}>About us</Link></li>
                                <li><Link href={""}>Sponsors relations</Link></li>
                                <li><Link href={""}>Our impact</Link></li>
                                <li><Link href={""}>Press</Link></li>
                                <li><Link href={""}>Trust, safety & security</Link></li>
                            </ul>
                        </div>
                        <div>
                        <h2 className={headers_class}>Resources</h2>
                            {/* divider */}
                            <div></div>
                            <ul>
                                <li><Link href={""}>Help and support</Link></li>
                                <li><Link href={""}>Success stories</Link></li>
                                <li><Link href={""}>Community</Link></li>
                                <li><Link href={""}>Modern slavery statement</Link></li>
                                <li><Link href={""}>Bold</Link></li>
                            </ul>
                        </div>
                </div>
                <div className="flex">
                    <h2 className={headers_class}>Follow Us</h2>
                    {/*followus */}
                    {/* mobile apps */}
                    <h2>Mobile Apps</h2>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                </div>

                <div>
                <span>© 2023 - 2024 YOHOWORK.com®</span>
                <Link href={""}>Terms of Service</Link>
                <Link href={""}>Privacy Policy</Link>
                <Link href={""}>Cookie Settings </Link>
                <Link href={""}>Accessibility</Link>
                </div>

            </Container>
        </footer>
  );
}