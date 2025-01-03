import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <div className="grow font-bold text-lg">Godly Productions</div>
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