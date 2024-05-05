"use client"


import {useState} from 'react'

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  

export function RussianRoulette(){

    const [dead, setDead] = useState(0)
    
    function gamble(){
        setDead(getRandomInt(5))
    }
    
    return(
        <div>
            <div>Russian Roulette</div>
            <div>{dead}</div>
            <button onClick={gamble} className='border border-white rounded p-2'>Gamble</button>
        </div>
    )
}