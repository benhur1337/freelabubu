export default function Tests() {
  return (
    <div>
      <div className="rounded-full bg-gray-600 w-[275px] h-[275px] p-[25px] justify-center items-center animate-spin-fast">
        <div className="w-[225px] h-[225px] bg-gray-700 rounded-full flex flex-col justify-center items-center gap-4">
          <div className="flex gap-[25px]">
            <div className="rounded-full bg-yellow-500 w-[50px] h-[50px]"></div>
            <div className="rounded-full bg-black w-[50px] h-[50px]"></div>
          </div>
          <div className="flex gap-[25px]">
            <div className="rounded-full bg-black w-[50px] h-[50px]"></div>
            <div className="rounded-full bg-inherit w-[50px] h-[50px] flex items-center justify-center">
                <div className="rounded-full bg-gray-500 w-[20px] h-[20px]"></div>
            </div>
            <div className="rounded-full bg-black w-[50px] h-[50px]"></div>
          </div>
          <div className="flex gap-[25px]">
            <div className="rounded-full bg-black w-[50px] h-[50px]"></div>
            <div className="rounded-full bg-black w-[50px] h-[50px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
