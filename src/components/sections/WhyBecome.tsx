'use client'

import Image from "next/image";
import Container from "../Container";
import Card from "../Ui/Card";
import { useCards } from "@/context/CardsContext";
export default function WhyBecome({title}:{title?:string}){
const Cards=useCards();

    return(
        <section>
            <Container>
            { title && 
            <>
            <h2 className="z-10">{title}</h2> 
            <Image width={370} height={370} alt="GreenBlur" src="GreenBlur.svg" className="z-0"/>
            </>
            }

            {Cards.map((card)=>(
                <Card key={card.header} header={card.header} url={card.url} text={card.text} button={card.button}/>
            ))}
            
            </Container>
        </section>
    );
}