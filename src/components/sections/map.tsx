import Image from "next/image";
import Container from "../Container";
export default function Map(){
    return(
        <section>
            <Container className="flex flex-col items-center mt-50 ">
                <h2 className="text-text text-4xl sm:text-6xl leading-tight font-bold text-center ">Browse Programs <br/>By Location</h2>
                <Image className="object-fill"src="map.svg" alt="worldMap" width={1600} height={950}></Image>
            </Container>
        </section>
    )
}