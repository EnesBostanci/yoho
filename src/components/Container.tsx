
export default function Container({children}: Readonly<{children:React.ReactNode}>,className?:string){ 
    return(
        <div className={`container max-w-[1580px] ${className}`}>
        {children}
        </div>
    )
}