import Container from "../Container"
import Image from "next/image";
import Button from "../Ui/Button";

export default function WhatIs(){
    return(
    <section className="relative">
        <Image  alt="layer" src="background.svg" fill  className="bg-pri z-0 w-full object-cover"></Image>
        <Image width={900} height={800} alt="layer" src="layer_1.svg" className="absolute right-0 -top-40 z-10"></Image>
            <Container>
                <h2 className="font-bold text-8xl text-text uppercase leading-tight z-10 pt-36">What is<br/> YohoWork?</h2>
                <Button title="YOU & YOHO" bgColor="bg-button" textColor="white"/>
            </Container>
    </section>
        );
}