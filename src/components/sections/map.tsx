import Image from "next/image";
import Container from "../Container";
export default function Map(){
    return(
        <section>
            <Container className="flex flex-col items-center mt-50">
                <h2 className="text-text text-6xl leading-tight font-bold text-center ">Browse Programs <br/>By Location</h2>
                <Image className="-mt-40"src="map.svg" alt="" width={1600} height={950}></Image>
            </Container>
        </section>
    )
}