import Link from "next/link";
import { ArtistType } from "@/app/lib/types/artistType";
import Image from "next/image";

const ArtistList = (props: {artistList: ArtistType[]}) => {
  const artistList = props.artistList

  return (
    <div className="flex flex-col gap-8">
      {artistList.map((artist) => {
        const artistImg = artist.img ? artist.img : 'globe.svg'
        // console.log('artist img: ', artistImg)
        // const artistLink = artist.link ? artist.link : 'https://godlyproductions.com/'
        const artistName = artist?.artistName ? artist.artistName : artist.name
        return (
          <div 
            key={artist._id}
            className="flex flex-col sm:flex-row gap-4 border-2 border-white rounded-xl p-4"
          >
            <div className="sm:w-1/3 max-w-[400px]">
              <Image src={artistImg} alt={"artist"} width={400} height={400}/>
            </div>
            <div className="flex flex-row justify-between grow">
              <div className="font-bold text-xl">{artistName}</div>
            </div>
            <Link 
                href={`/music-catalog/${artist._id}`}
                className="text-center border-2 border-white rounded-xl h-min p-3 cursor-pointer"
              >
                Albums
              </Link>
              <Link 
                href={`/music-catalog/${artist._id}`}
                className="text-center border-2 border-white rounded-xl h-min p-3 cursor-pointer"
              >
                Singles
              </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ArtistList;