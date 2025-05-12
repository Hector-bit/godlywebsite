import { SongType } from "@/app/lib/types/songType"
import Image from "next/image"
import Link from "next/link"

export default function SingleCard(props: { Single: SongType }) {

  const single = props.Single
  const imgSingle = single?.img ? single.img : 'globe.svg'

  return (
    <div className="flex flex-row border-2 border-white p-3 rounded-xl gap-3">
      <Image src={imgSingle} alt={"single cover"} width={100} height={100}/>
      <div className="flex flex-col gap-2">
        <div>{single.songName}</div>
        <div className="flex flex-row">
          {single?.spotifyLink &&
            <Link href={single?.spotifyLink}>
              <Image src={"/images/sociallogos/spotify.svg"} alt={'Spotify link'} width={40} height={40}/>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}