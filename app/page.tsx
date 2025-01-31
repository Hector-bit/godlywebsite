import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="relative z-[2] text-2xl sm:text-5xl font-medium h-full w-full">
        <div>From dreams </div>
        <div>to reality: creating </div>
        <div>brands that change </div>
        <div>the world.</div>
      </div>
      <div className="relative sm:absolute flex justify-center items-center z-[1] w-full">
        <Image 
          className="w-full sm:w-1/3"
          src={"/images/stavros.png"} 
          alt={"ambassador"} height={1000} width={1000}
        />
      </div>
    </div>
  );
}
