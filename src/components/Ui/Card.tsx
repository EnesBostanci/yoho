import { CardType } from "@/types/Card";
import { Plus } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Card( {header,url,text,button}:CardType){
    return(
        <div className="flex">
        <Image width={100}  height={100} src={url} alt={`${url} img`}></Image>
        <div className="flex flex-col">
            {/* divider */}
            <div className="h-1 w-16"></div>
            <h2 className="font-bold leading-8 text">{header}</h2>
            
            {text.map((t,id)=>(
                <div key={id}>
                <Plus className="text-primary1"/>
                <span className="leading-loose">{t}</span>
                </div>
            ))}
            <Button title="Learn More" bgColor={button.bgcolor} textColor={button.textcolor}/> 
        </div> 

        </div>
    );
}