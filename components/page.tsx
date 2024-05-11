"use client";
export function Tests() {
  return (
    <div className="flex gap-[200px]">
      <div className="flex flex-col items-center gap-50px]">
        <div className="rounded-full bg-gray-700  w-[100px] h-[100px] z-30 flex justify-center items-center border-white border-4">
          <div className="rounded-full bg-black w-[75px] h-[75px] z-40"></div>
        </div>
        <div className="rounded-full flex items-center border-white border-4 justify-center bg-gray-600 w-[275px] h-[275px] p-[25px] absolute z-10">
          <div className="rounded-full bg-gray-400  w-[150px] h-[150px]"></div>
        </div>
        <div className="rounded-xl w-[50px] h-[250px] bg-gray-700 border-white border-4 absolute z-20 mt-[40px]"></div>
        <div className="rounded-xl w-[150px] h-[300px] bg-amber-900 absolute z-0 mt-[200px] border-white border-4"></div>
      </div>
      <div className="rounded-full bg-gray-600 w-[275px] h-[275px] justify-center items-center border-white border-4 flex animate-spin-fast">
        <div className="w-[225px] h-[225px] bg-gray-700 rounded-full flex flex-col justify-center border-white border-4 items-center gap-4">
          <div className="flex gap-[25px] ">
            <div className="rounded-full border-white border-4 bg-yellow-500 w-[50px] h-[50px]"></div>
            <div className="rounded-full bg-black w-[50px] border-white border-4 h-[50px]"></div>
          </div>
          <div className="flex gap-[25px]">
            <div className="rounded-full bg-black w-[50px] h-[50px] border-white border-4"></div>
            <div className="rounded-full bg-transparent w-[50px] h-[50px] flex items-center justify-center">
              <div className="rounded-full bg-gray-500 w-[20px] h-[20px] border-white border-4"></div>
            </div>
            <div className="rounded-full bg-black w-[50px] h-[50px] border-white border-4"></div>
          </div>
          <div className="flex gap-[25px]">
            <div className="rounded-full bg-black w-[50px] h-[50px] border-white border-4"></div>
            <div className="rounded-full bg-black w-[50px] h-[50px] border-white border-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
