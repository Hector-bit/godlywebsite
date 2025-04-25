import Image from "next/image";

const Booking = () => {
  return (
    <div className="flex flex-col gap-2 font-bold">
      <div>Check studio availablity first: Google calandar link</div>
      <div>Send us an email at godlyproductionsmt@gmail.com</div>
      <Image src={"/images/godlyMenu.png"} alt={"godly productions menu"} width={600} height={1000}/>
    </div>

  )
}

export default Booking;