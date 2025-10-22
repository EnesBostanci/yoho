'use client'
import { useContext,createContext} from "react";
import { CardType } from "@/types/Card";

const Cards:CardType[]=[
{
    header:"Freelancers",
    url:"Card.svg",
    text:["Professional Growth and Learning","Economic Independence & Sustainability","Impactful Work"],
    button:{bgcolor:"bg-white",textcolor:"primary1"}
},
{
    header:"Companies",
    url:"Card_2.svg",
    text:["Access to Diverse Talent","Operational Efficiency","Corporate Social Responsibility"],
    button:{bgcolor:"bg-white",textcolor:"primary1"}
},
{
    header:"Sustainable Impact ",
    url:"Card_3.svg",
    text:["Sustainable Impact","Direct Connection to Grassroots Solutions","Risk Mitigation"],
    button:{bgcolor:"bg-primary1",textcolor:"white"}
}
]

const CardsContext=createContext<CardType[]|undefined>(undefined);


function CardsProvider({children}:{children:React.ReactNode}){
    
    return(
        <CardsContext.Provider value={Cards}>
        {children}
        </CardsContext.Provider>
    );
}


function useCards(){
    const Context=useContext(CardsContext);
    if(!Context){
        throw new Error("the context undefined");
    }
    return  Context;
}

export {useCards,CardsProvider};