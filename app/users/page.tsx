"use client"

import { useState, useEffect } from "react"

export default function Page(){

    const [users, setUsers] = useState<any>()
    useEffect(()=>{
            async function getUsers(){
                const response = await fetch('https://dummyjson.com/users')
                const data = await response.json()
                setUsers(data.users)
                console.log(users)
            }

            getUsers()
        },
        []
    )
    return(
        <div>
            {
            users?.map((item:any, key:number) => (
                <div key={key}>
                    <div className="text-bold p-2">{item.firstName + " " + item.lastName + " " + item.role}</div>
                </div>
            ))
            }
        </div>
    )
}