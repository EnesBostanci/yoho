import CardSm from "@/components/CardSm";
import { title } from "process";
export default function Browse(){

const cards=[
    {
        url:"",
        title:"Multimedia",
    },
    {
        url:"",
        title:"Translation",
    },
    {
        url:"",
        title:"Photography",
    },
    {
        url:"",
        title:"Accounting",
    },
]

    return(
        <section>
            <Container className="flex ">
            <h2 className="font-bold leading-tight">Browse Opportunities by Fields</h2>
            <CardSm></CardSm>
            <CardSm></CardSm>
            <CardSm></CardSm>
            <CardSm></CardSm>
            </Container>

        </section>
      
    )

}