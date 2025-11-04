import Container from "@/components/Container"
import Sponsor from "@/components/Ui/Sponsor"
const data =[
    {
        img:"sponsor1.svg" ,
        textBold:"YohoWork provides a platform for sponsors and agencies to fund initiatives that are both impactful and sustainable,",
        text:"especially in areas affected by conflict or instability."
    },
    {
        img:"sponsor2.svg" ,
        textBold:"YohoWork helps sponsors and agencies reach grassroots levels, ",
        text:" ensuring that their contributions are effectively implemented and directly address community needs."
    },
    {
        img:"sponsor3.svg" ,
        textBold:"YohoWork’s structure and mission provide a more stable and controlled environment for sponsorship,",
        text:"mitigating risks typically associated with political or economic instability."
    },
]
export default function Sponsors(){
    return(
        <section>
            <Container className="flex flex-col gap-30 ">
                <h2 className="font-bold font-space_groteskk text-6xl leading-tight text-center text-primary4">Sponsors & <br />Development Agencies</h2>
                <div className="flex flex-col gap-10 items-center lg:flex-row flex-wrap lg:gap-35 md:justify-center ">
                    {data.map((s,id)=>(
                            <article key={id} className="flex flex-col w-[350px]">
                            <Sponsor  data={s}/>
                            </article>)    
                        )
                    }
                </div>
            </Container>
        </section>
    )
}