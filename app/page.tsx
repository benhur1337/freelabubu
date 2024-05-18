import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <br></br>
      <Link href="/policy" className="font-bold p-6">Term and Condition of Use</Link>
      <input type="checkbox" name = "finished"></input>
      <label htmlFor = 'finished' className="p-2">accept our terms and agreement?</label>
    </div>
  );
}
