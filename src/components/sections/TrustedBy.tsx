import Container from "../Container";
import Image from "next/image";
import  CardTrusted  from "../Ui/CardTruseted";
const data=[
    {
        name:"Altibbi",
        text:"“Working with a diverse range of skilled freelancers through YohoWork has allowed us to innovate and adapt swiftly to healthcare trends. This flexibility is crucial in our mission to provide accessible medical advice.”",
        img:"profilepic.svg",
        imgName:"Dr. Leila Abou El-Fadl",
        imgPos:"Chief Medical Officer"
    },
    {
        name:"Careem",
        text:"“YohoWork's platform has revolutionized how we scale our operations by connecting us with top-tier talent on-demand. This agility has been key in maintaining our competitive edge in the dynamic transportation market.”",
        img:"profilepic.svg",
        imgName:"Ahmed Malik",
        imgPos:"VP of Operations"
    },
    {
        name:"Talabat",
        text:"“By integrating freelancers into our workflow, we've not only enhanced our service delivery but also enriched our creative solutions, thanks to YohoWork's robust talent network.”",
        img:"profilepic.svg",
        imgName:"Sara Al-Khawaja",
        imgPos:"Director of Strategic Initiatives"
    },  
]
export default function TrustedBy(){
    return(
        <Container>
            <section className="flex flex-col gap-20 mt-20">
                <h2 className="font-space_groteskk font-bold text-center text-4xl leading-tight text-primary3 self-center md:text-left">TRUSTED BY TOP BRANDS <br/> AND STARTUPS GLOBALLY!</h2>
                <div className="flex items-center gap-5 justify-center flex-wrap lg:gap-10 xl:gap-20">
                    {
                        data.map((c,idx)=>
                        <article key={idx} className="relative border border-primary1 rounded-2xl h-[400px] w-[400px]">
                        <Image width={80} height={15} alt="decoration" src="TopRight.svg" className="absolute top-0 right-2 -translate-y-1/2"/>
                        <CardTrusted name={c.name} text={c.text} img={c.img} imgName={c.imgName} imgPos={c.imgPos}/>
                        </article>
                    
                        )
                     }
                 </div>
            </section>
        </Container>
    )
}