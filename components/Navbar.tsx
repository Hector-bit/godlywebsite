import Link from "next/link";
import HeaderMenuMobile from "./HeaderMenuMobile";

// TODO: cleanup routes and make then into a list 
const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex flex-row items-center mb-2">
        <Link href={'/'} className="grow font-bold text-4xl">Godly Productions</Link>
        <div className="flex flex-row gap-x-4 font-medium">
          <Link href={'/'}>Home</Link>
          <Link href={'/music-catalog'}>Music Catalog</Link>
          <Link href={'/events'}>Events</Link>
          <Link href={'/news'}>News</Link>
          <Link href={'/booking'}>Booking</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;