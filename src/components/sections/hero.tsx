import Image from "next/image";
export default function Hero(){
    return(
    <section className="flex flex-col">
        <p className="text-primary1">YohoWork</p>
        <h1>Skill Up, Scale Up, Rise Up</h1>
        <p className="">Welcome to YohoWork, the global platform empowering freelancers to make a positive impact worldwide. </p>
        <Image src="blueBlur.svg" alt="blurBlur" width={550} height={550} className="z-1 absolute"></Image>
        <div className="flex ">
            <button className="bg-primary1 rounded-xl border-black px-3 py-5.5">YOU & YOHO</button>
            <button className="border rounded-3xl border-black px-3 py-5.5">Explore</button>
        </div>
        <span>Trusted by:</span>
        <div>
            {/* <Image alt= width src=/> */}
            {/* <Image alt= width src=/> */}
            {/* <Image alt= width src=/> */}

        </div>

    </section>
    );
}