import Image from "next/image";
export default function Company({header,text,img}){
    return(
        <>
        <div className="flex flex-col max-w-[650]">
            <h2 className="text-text2 font-bold font-lexend text-3xl leading-8 capitalize">{header}</h2>
            <p className="leading-8 text-text text-xl tracking-wide">{text}</p>
        </div>
        <Image src={img} alt={`${img} icon`} width={400}  height={300}/>
        </>
    )

}