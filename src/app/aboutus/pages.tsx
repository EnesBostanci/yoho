import WhyBecome from "@/components/sections/WhyBecome";
import Hero from "@/components/sections/hero";
import WhatIs from "@/components/sections/WhatIs";
import Freelancers from "@/components/sections/aboutUs/FreeLancers";
export default function Page(){
    return(
        <main>
            <Hero></Hero>
            <WhyBecome/>
            <Freelancers/>
            {/*oppesite*/}
            <WhatIs/>
           
        </main>
    )
}