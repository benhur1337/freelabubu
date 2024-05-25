"use client"
import { Gun } from './guns';

import {useState} from 'react'

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  
export function RussianRoulette(){

    const [markedDead, markDead] = useState(0)
    function gamble(){
        markDead(getRandomInt(6))
    }

    return(
        <div>
            <div>Russian Roulette</div>
            <Gun></Gun>
            <div>{markedDead}</div>
            <button onClick={gamble} className='border border-white rounded p-2'>Gamble</button>
        </div>
    )
}