export function Heading(props:{children:any}){
    return(
        <div className="text-3xl p-3 font-bold">{props.children}</div>
    )
}

export function Title(props:{children:any}){
    return(
        <div className="text-5xl font-bold p-3">{props.children}</div>
    )
}