import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center mb-2">
      <div className="grow font-bold text-4xl">Godly</div>
      <div className="flex flex-row gap-x-4 font-medium">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/booking'}>Booking</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;