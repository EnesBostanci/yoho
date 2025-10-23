'use client'

import Image from "next/image";
import Container from "../Container";
import Card from "../Ui/Card";
import { useCards } from "@/context/CardsContext";
export default function WhyBecome({title}:{title?:React.ReactNode}){
const Cards=useCards();

    return(
        <section className="mt-70">
            <Container>
                
            { title && 
            <div className="flex items-center justify-center">
            <h2 className="font-bold leading-tight text-6xl text-text z-10 relative">{title}</h2> 
            <Image width={370} height={370} alt="GreenBlur" src="GreenBlur.svg" className="z-0 absolute"/>
            </div>
            }
            <div  className="flex mt-12.5 justify-center">

            {Cards.map((card)=>(
                
                <Card key={card.header}  header={card.header} url={card.url} text={card.text} button={card.button}/>
            ))}
            </div>
            
            </Container>
        </section>
    );
}