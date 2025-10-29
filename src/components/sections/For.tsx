import { Plus } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container"
export default function For({img,span,header,lines,img2,reverse}){
    return(
        
        <section>
            <Container className={`flex flex-col gap-4 lg:gap-0 lg:flex-row justify-around items-center mt-40  ${reverse ?"lg:flex-row-reverse":""}`}>
                <div>
                <Image src={img} width={700} height={550} alt={"side img"}/>
                </div>
                <div className="flex flex-col gap-3 mx-auto">
                    <span className="uppercase font-light leading-relaxed">{span}</span>
                    <h2 className="uppercase leading-tight font-bold text-4xl lg:text-6xl text-button">{header}</h2>
                    {lines.map((line,id)=>(
                        <div key={id} className="flex items-center" >
                            <Plus className="text-primary1 mr-3"/>
                            <span className="leading-8 text-text2">{line}</span>
                        </div>))}
                    <button className="border border-primary3 rounded-4xl py-2  px-3 sm:py-6.5 sm:px-9 gap-2 flex items-center self-start ">{img2.icon} <span className="text-text text-lg leading-4.5 font-dm_snans ">{img2.text}</span></button>   
                </div>
            </Container>
        </section>
    )
}