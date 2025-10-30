import WhyBecome from "@/components/sections/WhyBecome";
import Hero from "@/components/sections/hero";
import WhatIs from "@/components/sections/WhatIs";
import Freelancers from "@/components/sections/aboutUs/FreeLancers";
import Companies from "@/components/sections/aboutUs/Companies";

const heroData={
    span:{
        text:"You & YOHO",
        color:"black"
    },
    header:<>Why Become <br/> A WonderMaker?</>,
    expolorColor:"primary1"
}
export default function Page(){
    return(
        <main>
            <Hero span={heroData.span} header={heroData.header} expolorColor={heroData.expolorColor} />
            <WhyBecome render={false}/>
            <Freelancers/>
            <Companies/>
            <WhatIs header=<>The Structure <br/> A Model of <br/> Triangular Synergy </> headerSize="text-5xl" reverse={true} button={false}/>   

        </main>
    )
}