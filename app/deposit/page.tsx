import React from 'react';

export default function Page() {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center p-6">Deposit</h2>
            <div className="container mx-auto px-4 py-8 p-6">
                <div className="flex flex-col p-6">
                    <label htmlFor="amount" className="text-gray-700">Amount:</label>
                    <input type="number" id="amount" name="amount" required className="text-black px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                </div>
                <div className="flex flex-col p-6">
                    <label htmlFor="card-number" className="text-gray-700">Card Number:</label>
                    <input type="number" id="card-number" name="card-number" min="1" max="16" placeholder="XXXX XXXX XXXX XXXX" className="text-black px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                </div>
                    <div className='credit-card-info flex justify-between text-sm text-gray-500 p-6'>
                    <span>Expires: </span>
                    <input type="number" id="expire-date" name="expire-date" placeholder="MM" className="text-black px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input><div>/</div><input type="number" id="expire-date" name="expire-date" placeholder="YYYY" className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                    <label htmlFor="cvv" className="text-gray-700">CVV:</label>
                    <input type="number" id="cvv" name="cvv" max="3" placeholder="123" className="text-blackp-6 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                </div>
                <button type="submit" className="text-blackp-6 w-full py-2 rounded-md bg-sky-500 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Deposit</button>
            </div>
        </div>
    )
}