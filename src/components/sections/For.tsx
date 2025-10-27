import { Plus ,Landmark, Monitor} from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container"
export default function For({img,span,header,lines,img2,reverse}){
    return(
        
        <section>
            <Container className={`${reverse ?"flex-row-reverse":""}`}>
                <Image src={img} width={700} height={550} alt={"side img"}/>
                <div className="flex flex-col">
                    <span className="uppercase font-light leading-relaxed">{span}</span>
                    <h2 className="uppercase leading-tight font-bold text-6xl text-button">{header}</h2>
                    {lines.map((line,id)=>(
                        <div key={id} className="flex items-center" >
                            <Plus className="text-primary1 mr-3"/>
                            <span className="leading-8 text-text2">{line}</span>
                        </div>))}
                    <button className="border rounded-4xl pt-7 px-9 flex items-center">{img2.icon} <span className="text-text text-lg leading-4.5 font-dm_snans">{img2.text}</span></button>   
                    
                </div>
            </Container>
        </section>
    )
}