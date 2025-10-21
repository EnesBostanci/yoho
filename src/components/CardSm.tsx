import Image from "next/image";

export default function CardSm ({url,title}:{url:string,title:string}){
    return(
        
        <div className="border border-border flex flex-col">
            <Image src={url} alt={title+"img"}></Image>
            <span className="uppercase">{title}</span>
        </div>
    );
}