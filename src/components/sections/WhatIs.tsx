import Container from "../Container"
import Image from "next/image";
import Button from "../Ui/Button";

export default function WhatIs({header,headerSize,button,reverse,img}){
    return(
    <section className="relative">
        <Image  alt="layer" src="background.svg" fill className="z-0  object-cover"/>
            <Container className={`flex flex-col gap-4 lg:justify-center lg:flex-row ${reverse ?"lg:flex-row-reverse lg:mb-150 lg:mt-100":"" }`}>
                <div className={`text-center ${reverse ?"lg:ml-auto lg:w-1/2":"lg:mr-auto lg:w-1/2"} `}>
                <h2 className={`font-bold text-4xl ${headerSize} text-text uppercase leading-tight z-10 `}>{header}</h2>
                {button && <Button title="YOU & YOHO" bgColor="bg-button" textColor="white"/>}
                </div>
                <Image width={900} height={700} alt="layer" src={img} className={reverse ?"lg:absolute left-0 mb-10 lg:-top-40 z-10 lg:w-1/2":"lg:absolute right-0 lg:-top-40 z-10 lg:w-1/2" }/>
            </Container>
    </section>
        );
}