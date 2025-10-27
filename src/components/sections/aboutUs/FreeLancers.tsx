import Container from "@/components/Container"
import Image from "next/image"
export default function Freelancers(){
    const data=["YohoWork enables freelancers to transcend traditional learning barriers facilitating skill acquisition and personal growth in a global marketplace.",
                "YohoWork empowers Freelancers to secure continuous work opportunities and maintain financial stability without geographical constraints.",
                "YohoWork connects freelancers with assignments that not only fulfill professional goals but also contribute to social and environmental betterment."
            ]
    return(
        <section>
            {/* <Image src="dotedBackground.svg"  alt="dotedBackground" /> */}
            <Container className="flex flex-col">
            <h1 className="leading-tight text-6xl font-bold uppercase text-text mx-auto">Freelancers</h1>
            <div className="flex justify-between">
                {data.map((d,idx)=>(
                <div key={idx} className="relative">
                <Image className="absolute relative inset-0 -z-10" key={idx} width={500} height={250} src="free.svg" alt={`freelancer ${idx} backgorund`}/>
                <p className=" absolute inset-0 leading-8 capitalize z-10">{d}</p>
                </div>
            ))}
            </div>

            </Container>

        </section>
    )
}