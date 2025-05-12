import Link from "next/link";
import { ArtistType } from "@/app/lib/types/artistType";
import Image from "next/image";
import { SongType } from "@/app/lib/types/songType";

const SingleList = (props: {singleList: SongType[]}) => {
  const singleList = props.singleList

  return (
    <div className="flex flex-col gap-8">
      {singleList.map((single) => {
        // const artistImg = single.img ? single.img : 'globe.svg'
        // console.log('artist img: ', artistImg)
        // const artistLink = single.link ? single.link : 'https://godlyproductions.com/'
        // const artistName = artist?.artistName ? single.artistName : single.name
        return (
          <div 
            key={single._id}
            className="flex flex-col sm:flex-row gap-4 border-2 border-white rounded-xl p-4"
          >
            {/* <div className="sm:w-1/3 max-w-[400px]">
              <Image src={artistImg} alt={"artist"} width={400} height={400}/>
            </div>
            <div className="flex flex-row justify-between grow">
              <div className="font-bold text-xl">{artistName}</div>
            </div> */}
            <Link 
                href={`/music-catalog/${single._id}`}
                className="text-center border-2 border-white rounded-xl h-min p-3 cursor-pointer"
              >
                Albums
              </Link>
              <Link 
                href={`/music-catalog/${single._id}`}
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

export default SingleList;