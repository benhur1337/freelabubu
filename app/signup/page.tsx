import Link from "next/link";

export default function SignupPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
        <form action="/signup" method="POST" className="space-y-4">
          <div className="flex flex-col">
            <label for="name" className="text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full" required />
          </div>
          <div className="flex flex-col">
            <label for="email" className="text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full" required />
          </div>
          <div className="flex flex-col">
            <label for="password" className="text-sm font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full" required />
          </div>
          <div className="flex flex-col">
            <label for="password" className="text-sm font-medium mb-2">Phone numbers</label>
            <input type="number" id="numbewr" name="phone" className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full" required />
          </div>
          <input type="checkbox" name = "finished" required></input>
          <label for="terms" className="ml-2 text-sm">I agree to the </label>
          <button href="/policy" className="">term of use</button>
          <br></br>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </form>
      </div>
    );
  }