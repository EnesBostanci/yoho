'use client'

import Image from "next/image";
import Container from "../Container";
import Card from "../Ui/Card";
import { useCards } from "@/context/CardsContext";
export default function WhyBecome({title,render}:{title?:React.ReactNode;render?:boolean}){
const Cards=useCards();

    return(
        <section className={`${title?"mt-70 z-10":" z-10"}`}>
            <Container>
                
            { title && 
            <div className="flex items-center justify-center">
            <h2 className="font-bold leading-tight text-4xl sm:text-6xl text-text z-10 relative">{title}</h2> 
            <Image width={370} height={370} alt="GreenBlur" src="GreenBlur.svg" className="z-0 absolute"/>
            </div>
            }
            <div  className="flex flex-col items-center  gap-5 lg:flex-row lg:justify-center lg:gap-0 mt-12.5 relative ">
            {/* <Image src={"orangeDots.svg"}  width={110} height={173} alt="dots"  className="z-0 absolute top-0 right-0"/> */}

            {Cards.map((card)=>(
                
                <Card key={card.header}  header={card.header} url={card.url} text={card.text} button={card.button}  render={render}/>
            ))}
            </div>
            
            </Container>
        </section>
    );
}