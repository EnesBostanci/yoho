import CardSm from "@/components/Ui/CardSm";
import Container from "../Container";
export default function Browse({render,header}:
    {    render:{url:string;
         title: string;
        }[];
    header:React.ReactNode}){

    return(
        <section className="mt-50">
            <Container className="flex flex-col justify-between gap-5 lg:flex-row ">
            <h2 className="font-bold leading-tight font-lexend lg:text-6xl lg:text-left  text-text2 text-center text-4xl ">{header}</h2>
            <div className="flex flex-col gap-10 justify-between lg:flex-row items-center">
            {render.map((card)=>(<CardSm url={card.url} title={card.title} key={card.title} />))}
            </div>
            </Container>

        </section>
      
    )

}