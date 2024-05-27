import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="mt-6 p-6 pl-0 flex flex-row items-center justify-evenly border-b-white rounded-[1100px] border-0 border-b-2 max-w-[1100px] mx-auto"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          className="hover:scale-110 duration-500"
          height={200}
          width={200}
          alt="logo"
        ></Image>
      </Link>
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <div className="font-bold p-6">Our Promotional Video</div>
      <video width="640" height="480" controls>
        <source src={"/Freelabubu.mp4"} type="video/mp4" className="item-center"/>
      </video>
    </div>
  );
}
