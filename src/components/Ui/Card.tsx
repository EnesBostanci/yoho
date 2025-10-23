import { CardType } from "@/types/Card";
import { Plus } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Card( {header,url,text,button}:CardType){
    return(
        <article className="flex border border-border2 rounded-xl w-lg h-90 relative">
        <Image className="h-[100] m-3" width={100}  height={100} src={url} alt={`${url} img`}></Image>
        <div className="flex flex-col">
            {/* divider */}
            <div className="h-1 w-16 bg-black mt-20 mb-1.5"></div>
            <h2 className="font-bold leading-8 text-2xl">{header}</h2>
            {text.map((t,id)=>(
                <div className="flex items-center" key={id}>
                <Plus className="text-primary1 mr-3"/>
                <span className="leading-8 ">{t}</span>
                </div>
            ))}
            <div className="absolute mr-5 mb-5 bottom-0 right-0">
            <Button title="Learn More" bgColor={button.bgcolor} textColor={button.textcolor}/>
            </div> 
        </div> 

        </article>
    );
}