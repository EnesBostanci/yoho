import Container from "../Container"
import Image from "next/image";
import Button from "../Ui/Button";

export default function WhatIs({header,headerSize,button,reverse}){
    return(
    <section className="relative">
        <Image  alt="layer" src="background.svg" fill  className="bg-pri z-0 w-full object-cover"></Image>
            <Container className={reverse ?"flex flex-row-reverse":"" }>
                <h2 className={`font-bold ${headerSize} text-text uppercase leading-tight z-10 pt-36`}>{header}</h2>
                {button && <Button title="YOU & YOHO" bgColor="bg-button" textColor="white"/>}
                <Image width={900} height={800} alt="layer" src="layer_1.svg" className={reverse ?"absolute left-0 -top-40 z-10":"absolute right-0 -top-40 z-10" }/>
            </Container>
    </section>
        );
}