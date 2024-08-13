"use client"
import { useState } from "react";

export default function SlotMachine() {
    const slotNumbers = Array.from({ length: 3 }, () => 0);
    const [numbers, setNumbers] = useState(slotNumbers);
    const [isSpinning, setIsSpinning] = useState(false);
    const [pityCounter, setPityCounter] = useState(0);
    const [pityMultiplier, setPityMultiplier] = useState(1);

    const handleSpin = () => {
        setIsSpinning(true);
        let intervalId;

        const spin = () => {
            const newNumbers = slotNumbers.map(() => Math.floor(Math.random() * 10));
            setNumbers(newNumbers);
        };

        intervalId = setInterval(spin, 50);

        setTimeout(() => {
            clearInterval(intervalId);
            setIsSpinning(false);
            checkWin();
        }, 2000);
    };

    const checkWin = () => {
        const isTripleSeven = numbers.every(num => num === 7);
        const isDouble = numbers.filter(num => num === numbers[0]).length >= 2;

        if (isTripleSeven) {
            alert('YOU WIN ONE MILLION!');
            setPityCounter(0);
            setPityMultiplier(1);
        } else if (isDouble) {
            alert('YOU WIN!');
            setPityCounter(0);
            setPityMultiplier(1);
        } else {
            setPityCounter(pityCounter + 1);

            if (pityCounter >= 5) {
                setPityCounter(0);
                setPityMultiplier(pityMultiplier + Math.floor(Math.random() * 10) + 1);
                alert('Pity win! You win ' + pityMultiplier + ' times the normal prize!');
            } else {
                alert('Better luck next time!');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Betting bar */}
            <div className="w-1/2">
                {/* Betting functionality */}
            </div>
            {/* Slot machine display */}
            <div className="flex justify-center text-4xl font-bold">
                {numbers.map((num, index) => (
                    <div key={index} className="mx-4">{num}</div>
                ))}
            </div>
            {/* Spin button */}
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSpin} disabled={isSpinning}>
                Spin
            </button>
        </div>
    );
}