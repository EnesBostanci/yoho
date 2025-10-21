
export default function Container({children,className}:Readonly<{children:React.ReactNode;className?:string;}>)
{ 
    return(
        <div className={`container.responsive px-20 ${className || ""}`}>
        {children}
        </div>
    )
}