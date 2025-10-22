export default function Button({title,bgColor,textColor}:{title:string;bgColor:string,textColor:string}){
    return (
        <button className={`${bgColor} z-10 border text-${textColor} font-dm_snans leading-6.5 text-lg tracking-[0.55px] rounded-full border-black px-5.5 py-3`}>{title}</button>

    )
}