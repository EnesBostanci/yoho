import Container from "../Container";
import Image from "next/image";

export default function CardTrusted({name,text,img,imgName,imgPos}){
    return(
        <div className="flex flex-col pt-12.5 pb-7.5">
            <h2 className="font-bold text-2xl leading-7.5 ml-10.5 mb-2.5">{name}</h2>
            <p className="font-light leading-7.5 ml-10.5 max-w-[320px]">{text}</p>
            <div className="flex ml-8.5 mt-10 items-center gap-2.5">
            <Image width={40} height={40} className=" rounded-full" alt={`profilepic${name}`} src={img}></Image>
                <div className="flex flex-col">
                <span className="font-medium text-lg leading-7.5">{imgName}</span>
                <span className="font-light text-sm leading-7.5 whitespace-nowrap">{imgPos}</span>
                </div>
            </div>


        </div>
    )
}