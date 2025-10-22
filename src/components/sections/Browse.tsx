import CardSm from "@/components/Ui/CardSm";
import Container from "../Container";
export default function Browse({render,header}:
    {    render:{url:string;
         title: string;
        }[];
    header:string}){

    return(
        <section>
            <Container className="flex">
            <h2 className="font-bold leading-tight">{header}</h2>
            {render.map((card)=>(<CardSm url={card.url} title={card.title} key={card.title} />))}
            </Container>

        </section>
      
    )

}