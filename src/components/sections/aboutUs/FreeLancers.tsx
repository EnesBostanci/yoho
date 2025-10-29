import Container from "@/components/Container"
import Image from "next/image"
export default function Freelancers(){
    const data=["YohoWork enables freelancers to transcend traditional learning barriers facilitating skill acquisition and personal growth in a global marketplace.",
                "YohoWork empowers Freelancers to secure continuous work opportunities and maintain financial stability without geographical constraints.",
                "YohoWork connects freelancers with assignments that not only fulfill professional goals but also contribute to social and environmental betterment."
            ]
    return(
        <section style={{backgroundImage: 'url("dotedBackground.svg")',backgroundSize: 'cover',}}>
            <Container className="flex flex-col gap-5 lg:gap-10 mt-10">
            <h1 className="leading-tight text-4xl lg:text-6xl font-bold uppercase text-text mx-auto">Freelancers</h1>
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                {data.map((d,idx)=>(

                <div className="relative" key={idx}>
                <Image className=" absolute top-0 left-1/2 -translate-y-1/2 tr z-10" src="top.svg" alt="icon"  width={124} height={25}/>
                <Image className=" absolute left-0 top-1/2 -translate-x-full -translate-y-1/5 z-10 " src="left.svg" alt="icon"  width={20} height={65}/>
                <Image className=" absolute right-0 top-1/2 translate-x-full -translate-y-1/5 z-10" src="right.svg" alt="icon"  width={20} height={65}/>
                <div className="max-w-[470px] bg-primary4 px-16 py-14 [clip-path:polygon(15px_0,calc(100%_-_15px)_0,100%_15px,100%_calc(100%_-_15px),calc(100%_-_15px)_100%,15px_100%,0_calc(100%_-_15px),0_15px)] ">
                <p className="leading-8 text-center text-white">{d}</p>
                </div>
                </div>
            ))}
            </div>

            </Container>

        </section>
    )
}