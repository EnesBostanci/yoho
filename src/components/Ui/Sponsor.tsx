import Image from "next/image"
export default function Sponsor({data}:{data:{img:string;textBold:string;text:string}}){
    return(
            <>
            <Image alt={`img${data.img}`} src={data.img} width={100} height={100}></Image>
            {/* divider */}
            <div className="h-1 w-16 border-black border mt-9 mb-4"></div>
            <div>
            <span className="font-bold leading-9 text-2xl">{data.textBold}</span>
            <span className="leading-9">{data.text}</span>
            </div>
            </>
    )
}