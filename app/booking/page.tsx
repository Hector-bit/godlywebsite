import Image from "next/image";
import Link from "next/link";

const Booking = () => {
  return (
    <div className="flex flex-col gap-2 font-bold">
      <div>
        <span>Client Form: </span>
        <Link className="text-cyan-500" href={"https://forms.gle/HLqi91taBXNpBWvz5"}>Google Form</Link>
      </div>
      <div>Send us an email at godlyproductionsmt@gmail.com</div>
      <div>Call at <a href="tel:+15645651717">+115645651717</a></div>
      <Image src={"/images/godlyMenu.png"} alt={"godly productions menu"} width={600} height={1000}/>
    </div>

  )
}

export default Booking;