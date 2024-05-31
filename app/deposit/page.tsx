import { Title } from "@/components/aboutus"

export default function () {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Deposit</h2>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col">
                    <label for="amount" class="text-gray-700">Amount:</label>
                    <input type="number" id="amount" name="amount" required className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                </div>
                <div className="flex flex-col">
                    <label for="card-number" className="text-gray-700">Card Number:</label>
                    <input type="number" id="card-number" name="card-number" maxlength="16" inputmode="numeric" placeholder="XXXX XXXX XXXX XXXX" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                </div>
                    <div className='credit-card-info flex justify-between text-sm text-gray-500'>
                    <span>Expires: </span>
                    <input type="number" id="expire-date" name="expire-date" placeholder="MM" className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input><div>/</div><input type="number" id="expire-date" name="expire-date" placeholder="YYYY" className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                    <label for="cvv" class="text-gray-700">CVV:</label>
                    <input type="number" id="cvv" name="cvv" maxlength="3" inputmode="numeric" placeholder="123" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"></input>
                </div>
                <button type="submit" className="w-full py-2 rounded-md bg-sky-500 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Deposit</button>
            </div>
        </div>
    )
}