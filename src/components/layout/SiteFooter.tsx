import Container from "@/components/Container";
import { url } from "inspector";
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

    const  links=[
        {
            title: "Freelancers",
            listitems: [
                { title: "How to start", url: "#" },
                { title: "YohoWork Academy", url: "#" },
                { title: "Find freelance jobs worldwide", url: "#" }
            ]
        },
        {
            title: "Companies",
            listitems: [
                { title: "How to hire", url: "#" },
                { title: "Job posting guide", url: "#" },
                { title: "Payment and security", url: "#" },
                { title: "Hire in crisis countries", url: "#" }
            ]
        },
        {
            title: "Sponsors",
            listitems: [
                { title: "About us", url: "#" },
                { title: "Sponsors relations", url: "#" },
                { title: "Our impact", url: "#" },
                { title: "Press", url: "#" },
                { title: "Trust, safety & security", url: "#" }
            ]
        },
        {
            title: "Resources",
            listitems: [
                { title: "Help and support", url: "#" },
                { title: "Success stories", url: "#" },
                { title: "Community", url: "#" },
                { title: "Modern slavery statement", url: "#" },
                { title: "Bold", url: "#" }
            ]
        }
    ];
    
    const headers_class="font-bold leading-7 text-lg font-lexend text-white";
    const items_class="leading-9 text-white";
    return(
        <footer className="bg-primary4">
            <Container> 
                <div className="flex justify-center">
                    {links.map((link)=>(
                    <div key={link.title}>
                        <h2 className={headers_class}>{link.title}</h2>
                            {/* divider */}
                        <div className="h-1 w-16 bg-white"></div>
                        <ul>
                         {link.listitems.map((listitem,id)=>
                            <li key={id} className={items_class}><Link href={listitem.url}>{listitem.title}</Link></li>
                         )}
                        </ul>
                    </div>
                    ))} 
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
                <Link className="text-white" href={""}>Terms of Service</Link>
                <Link href={""}>Privacy Policy</Link>
                <Link href={""}>Cookie Settings </Link>
                <Link href={""}>Accessibility</Link>
                </div>

            </Container>
        </footer>
  );
}