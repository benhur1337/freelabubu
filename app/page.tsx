import Image from "next/image";

export default function Home() {
  return (
    <div className="select-none bg-black flex flex-col">
      <div className="select-none flex items-center mt-[5%] flex-col">
        <div className="select-none text-9xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold">
          FreeLabubu
        </div>
        <div className="select-none text-4xl min-h-12 bg-gradient-to-tr from-blue-400 to-purple-950 bg-clip-text font-bold text-transparent">
          Best gambling simulator in the world.
        </div>
      </div>
      <div>
      <div className="flex flex-row justify-evenly mt-10">
        <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none hover:w-56 hover:h-56 hover:max-w-56 hover:max-h-56 hover:border-none duration-500 hover:bg-gradient-to-tl hover:from-indigo-950 hover:to-purple-800">Russian Roulette <br /><div className="text-sm duration-500">6 players 1 revolver. Players take turn to shoot themselves in the head if they die their bet will be split into other players' bet.</div></div>
        <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none hover:w-56 hover:h-56 hover:max-w-56 hover:max-h-56 hover:border-none duration-500 hover:bg-gradient-to-tl hover:from-indigo-950 hover:to-purple-800">Black Jack <br /><div className="text-sm duration-500">Both players are given a card. A player chose to get more cards or stop. The second player does the same. You must get higher card than the other player without exceeding 21.(2p)</div></div>
        <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none hover:w-56 hover:h-56 hover:max-w-56 hover:max-h-56 hover:border-none duration-500 hover:bg-gradient-to-tl hover:from-indigo-950 hover:to-purple-800">Slot<div className="text-sm duration-500">Place in money. If you get same 3 numbers, you get double the amount of your bet. If you hit the 777 jackpot you'll get 5 times the amount of your bet.</div></div>
        </div>
      </div>
    </div>
  );
}
