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
                { title: "About us", url: "/aboutus" },
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
    
    const headers_class="font-bold leading-7 text-lg font-lexend text-white text-text3 ";
    const items_class="leading-9 text-white text-text3";
    return(
        <footer className="bg-primary4 mt-30 xl:[clip-path:polygon(0_80px,100px_0,calc(100%-100px)_0,100%_80px,100%_100%,0_100%)]">
            <Container className="flex flex-col pt-27.5 gap-10"> 
                <div className="flex flex-col justify-center gap-15 sm:flex-row ">
                    {links.map((link)=>(
                    <div className="flex flex-col gap-2" key={link.title}>
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
                <div className="flex flex-col justify-between sm:flex-row gap-2">
                    <div className="flex gap-2.5 flex-wrap  ">
                    <h2 className="text-white mr-3 text-base leading-8 font-medium">Follow Us</h2>
                    {/*followus */}
                    <Image src="/Facebook.png" alt="FacebookLogo" width={36} height={36}/>
                    <Image src="/Instagram.png" alt="InstagramLogo" width={36} height={36}/>
                    <Image src="/Linkedin.png" alt="LinkedinLogo" width={36} height={36}/>
                    <Image src="/Twitter.png" alt="TwitterLogo" width={36} height={36}/>
                    <Image src="/Youtube.png" alt="YoutubeLogo" width={36} height={36}/>
                    </div>
                    {/* mobile apps */}
                    <div className="flex gap-2.5  ">
                    <h2 className="text-white mr-3 text-base leading-8 font-medium">Mobile Apps</h2>
                    <Image src="/apple.png" alt="appleLogo" width={36} height={36}/>
                    <Image src="/android.png" alt="androidLogo" width={36} height={36}/>
                    </div>
                </div>
                <div className="bg-white w-full h-1"></div>
                <div className="flex gap-20 mb-10 flex-wrap  ">
                <span className="text-white">© 2023 - 2024 YOHOWORK.com®</span>
                    <div className="flex gap-5 flex-wrap  ">
                <Link className="text-white" href={""}>Terms of Service</Link>
                <Link className="text-white" href={""}>Privacy Policy</Link>
                <Link className="text-white" href={""}>Cookie Settings </Link>
                <Link className="text-white" href={""}>Accessibility</Link>
                    </div>
                </div>

            </Container>
        </footer>
  );
}