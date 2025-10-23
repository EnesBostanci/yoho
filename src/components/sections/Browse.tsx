import CardSm from "@/components/Ui/CardSm";
import Container from "../Container";
export default function Browse({render,header}:
    {    render:{url:string;
         title: string;
        }[];
    header:React.ReactNode}){

    return(
        <section className="mt-50">
            <Container className="flex justify-between">
            <h2 className="font-bold leading-tight font-lexend text-6xl  text-text2 ">{header}</h2>
            <div className="flex gap-10 justify-between">
            {render.map((card)=>(<CardSm url={card.url} title={card.title} key={card.title} />))}
            </div>
            </Container>

        </section>
      
    )

}