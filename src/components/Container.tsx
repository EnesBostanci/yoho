
export default function Container({children,className}:Readonly<{children:React.ReactNode;className?:string;}>)
{ 
    return(
        <div className={`container.responsive  px-5 sm:px-8 lg:px-10 2xl:px-18 ${className || ""}`}>
        {children}
        </div>
    )
}