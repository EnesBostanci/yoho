import Container from "@/components/Container"
import Image from "next/image"
export default function Freelancers(){
    const data=["YohoWork enables freelancers to transcend traditional learning barriers facilitating skill acquisition and personal growth in a global marketplace.",
                "YohoWork empowers Freelancers to secure continuous work opportunities and maintain financial stability without geographical constraints.",
                "YohoWork connects freelancers with assignments that not only fulfill professional goals but also contribute to social and environmental betterment."
            ]
    return(
        <main>
            <Container>
            <h1>Freelancers</h1>
            {data.map((d,idx)=><Image key={idx} fill src="free.svg" alt={`freelancer ${idx}`}><p>d</p></Image>)}
            </Container>
        </main>
    )
}