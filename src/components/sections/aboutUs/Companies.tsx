import Company from "./Company";
import Container from "@/components/Container";

const companies=[
    {header:"partners with companies",text:"YohoWork partners with companies to maximize their human capital by finding top-tier talent without the complexities of traditional hiring processes.",img:"company1.svg"},
    {header:"operate more efficiently",text:"YohoWork helps companies operate more efficiently by managing freelancers remotely, thus curbing down their expenses..",img:"company2.svg"},
    {header:"contribute to social good",text:"YohoWork enables companies to not only fill their business needs but also contribute to social good, supporting freelancers who might otherwise face economic or geographic barriers.",img:"company3.svg"}
]
export default function Companies(){
    return(
        <section className="my-20">
            <Container className="flex flex-col gap-10">
            <h2 className="font-bold text-text text-4xl lg:text-6xl leading-tight mx-auto">COMPANIES</h2>
            {companies.map((c,id)=>
            <article className="flex flex-col justify-between text-center lg:text-left gap-5 items-center lg:flex-row" key={id}>
            <Company header={c.header} text={c.text} img={c.img}/>
            </article>
            )}
            </Container>
        </section>
    )
}