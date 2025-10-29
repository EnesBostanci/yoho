import CardSm from "@/components/Ui/CardSm";
import Container from "../Container";
export default function Browse({render,header}:
    {    render:{url:string;
         title: string;
        }[];
    header:React.ReactNode}){

    return(
        <section className="mt-50">
            <Container className="flex flex-col justify-between gap-5 sm:flex-row ">
            <h2 className="font-bold leading-tight font-lexend sm:text-6xl sm:text-left  text-text2 text-center text-4xl ">{header}</h2>
            <div className="flex flex-col sm:flex-row gap-10 justify-between">
            {render.map((card)=>(<CardSm url={card.url} title={card.title} key={card.title} />))}
            </div>
            </Container>

        </section>
      
    )

}