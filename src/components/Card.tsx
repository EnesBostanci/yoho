import { Plus } from "lucide-react";
import Image from "next/image";

export default function Card({url,header,}:{url:string;header:string}){
    return(
        <div className="flex">
        <Image src="" alt={}></Image>
        <div className="flex flex-col">
            {/* divider */}
            <div className="h-1 w-16"></div>

            <h2 className="font-bold leading-8 text"></h2>

            <div>
            <Plus/>
            <span></span>
            </div>
            <div>
            <Plus/>
            <span></span>
            </div>
            <div>
            <Plus/>
            <span></span>
            </div>
            {/* to be made as component */}
            <button className="bg-primary1 z-10 border text-white font-dm_snans leading-6.5 text-lg tracking-[0.55px] rounded-full border-black px-5.5 py-3">YOU & YOHO</button>
        </div> 

        </div>
    );
}