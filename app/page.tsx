import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="select-none flex items-center mt-[5%] flex-col">
        <div className="select-none text-9xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold">
          FreeLabubu
        </div>
        <div className="select-none text-4xl min-h-12 bg-gradient-to-tr from-blue-400 to-purple-950 bg-clip-text font-bold text-transparent">
          Best gambling site in the world.
        </div>
        <br></br>
      </div>
      <div>
        <div className="flex flex-row justify-evenly mt-10">
          <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none hover:w-56 hover:h-56 hover:max-w-56 hover:max-h-56 hover:border-none duration-500 hover:bg-gradient-to-tl hover:from-indigo-950 hover:to-purple-800">Russian Roulette <br /><div className="text-sm duration-500">6 players 1 revolver. Players take turn to shoot themselves in the head if they die their bet will be split into other players' bet.</div></div>
          <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none hover:w-56 hover:h-56 hover:max-w-56 hover:max-h-56 hover:border-none duration-500 hover:bg-gradient-to-tl hover:from-indigo-950 hover:to-purple-800">Black Jack <br /><div className="text-sm duration-500">Both players are given a card. A player chose to get more cards or stop. The second player does the same. You must get higher card than the other player without exceeding 21.(2p)</div></div>
          <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none hover:w-56 hover:h-56 hover:max-w-56 hover:max-h-56 hover:border-none duration-500 hover:bg-gradient-to-tl hover:from-indigo-950 hover:to-purple-800">Slot<div className="text-sm duration-500">Place in money. If you get same 3 numbers, you get double the amount of your bet. If you hit the 777 jackpot you'll get 5 times the amount of your bet.</div></div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly p-12">
        <Link href="/">
          <Image
            src="/logo.png"
            className="hover:scale-110 duration-500"
            height={300}
            width={300}
            alt="logo"
          ></Image>
        </Link>
        <div className="font-bold p-6 text-2xl">Our Promotional Video</div>
        <video width="640" height="480" className="border rounded-md shadow-md" controls>
          <source src={"/Freelabubu.mp4"} type="video/mp4" className="item-center" />
        </video>
      </div>
      <div className="flex flex-row items-center justify-evenly p-12">
        <div className="select-none text-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold">
          Our Motivation Texts
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly p-12">
        <Image
          src="/1.jpg"
          className="hover:scale-110 duration-500 p-6"
          height={700}
          width={700}
          alt="1"
        ></Image>
        <Image
          src="/2.png"
          className="hover:scale-110 duration-500 p-6"
          height={700}
          width={700}
          alt="2"
        ></Image>
      </div>
    </div>
  );
}
