import Image from "next/image";

export default function CardSm ({url,title}:{url:string,title:string}){
    return(
        
        <article className="border rounded-xl border-border2 flex flex-col items-center py-10 px-4.5 w-[250px]">
            <Image className="h-50" src={url} alt={title+"img"} width={200} height={200}></Image>
            <span className="uppercase tracking-tight text-text2 leading-relaxed font-bold text-xl">{title}</span>
        </article>
    );
}