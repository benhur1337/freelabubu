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
        <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none">Russian Roulette</div>
        <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none">Black Jack</div>
        <div className="border-4 rounded-xl p-4 text-xl pt-2 w-52 h-52 max-w-52 max-h-52 select-none">Slot</div>
        </div>
      </div>
    </div>
  );
}
