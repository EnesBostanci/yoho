import Image from "next/image";
import Container from "../Container";
export default function Map(){
    return(
        <section>
            <Container>
                <h2>Browse Programs <br/>by Location</h2>
                <Image src="map.svg" alt="" width={1600} height={950}></Image>
            </Container>
        </section>
    )
}