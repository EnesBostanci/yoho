import Image from "next/image";
import Container from "@/components/Container"
export default function Hero({span,header,text,expolorColor} : {span:{color:string;text:string};header:React.ReactNode;text?:React.ReactNode; expolorColor:string;}){
    return(
    <Container className="relative ">
    <section className="flex flex-col bg-white items-center pt-30 pb-37 ">
        <Image alt="blueBLur" height={546} width={546} src="blueBLur.svg" className="absolute m-auto inset-0 z-0 h-136" />
        <p className={`text-${span.color} font-light text-xl lg:text-3xl leading-9 mb-2 z-10`}>{span.text}</p>
        <h1 className="font-bold text-3xl  lg:text-6xl  text-center leading-tight text-primary3 mb-4.5 z-10">{header}</h1>
        {text && <p className="text-center text-text text-2xl leading-8  tracking-[0.55px] mb-6.5 z-10">{text}</p>}
        <div className="flex gap-6.5 mb-12.5 z-10">
            <button className="bg-primary1 border text-white font-dm_snans leading-6.5 text-lg tracking-[0.55px] rounded-full border-black px-5.5 py-3">YOU & YOHO</button>
            <button className={`border font-dm_snans text-lg leading-6.5 tracking-[0.55px]  rounded-full border-${expolorColor} px-5.5 py-3 text-${expolorColor}`}>Explore</button>
        </div>
        <span className="font-medium text-xl leading-6 tracking-[0.16px] mb-5.5 z-10">Trusted by:</span>
        <div className="flex flex-col sm:flex-row gap-17.5 z-10">
            <Image alt="googleIcon" height={43} width={131} src="google.svg"/>
            <Image alt="youtubeIcon" height={26} width={120} src="youtube.svg"/>
            <Image alt="facebookIcon" height={34} width={148} src="facebook.svg"/>
        </div>
    </section>
    </Container>
    );
}