import Container from "../Container"
import Image from "next/image";

export default function WhatIs(){
    return(
    <section className="relative">
        <Image  alt="layer" src="background.svg" fill  className="z-0"></Image>
        <Image width={900} height={800} alt="layer" src="layer_1.svg" className="absolute right-0 -top-40 z-10"></Image>
            <Container>
                <h2 className="font-bold text-8xl uppercase leading-tight z-10 pt-36">What is<br/> YohoWork?</h2>
                {/* to be made as component */}
                <button className="bg-primary1 z-10 border text-white font-dm_snans leading-6.5 text-lg tracking-[0.55px] rounded-full border-black px-5.5 py-3">YOU & YOHO</button>

            </Container>
    </section>
        );
}