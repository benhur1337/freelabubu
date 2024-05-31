"use client"
import { useState } from "react"

export default function Theme(props:{children:any}){
    const [theme, setTheme] = useState(false)
    return(
        <div className={theme? "hidden" : "flex"}>
            <div>{props.children}</div>
            <div className={theme? "flex absolute" : "flex absolute"}><button onClick={()=> setTheme(!theme)}>Theme Changing</button></div>
        </div>
    )
}