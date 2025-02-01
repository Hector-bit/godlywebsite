import Image from "next/image"
import { CatalogType } from "@/types/types"
import CatalogCard from "@/components/CatalogCard"

const catalogList:CatalogType[] = [
  {
    albumTitle: 'Soul Searching',
    img: 'soulsearching.jpg',
    artist: 'Chelsey Monique',
    spotify: 'https://open.spotify.com/album/2traKNQMVyH8Pl9s1wInaA?si=BGyzv78cSf6KubvHVCnchw'
  },
  {
    albumTitle: 'Stavo',
    img: 'stavo.jpg',
    artist: 'Stavo',
    instagram: 'https://www.instagram.com/stavogavi',
    spotify: 'https://open.spotify.com/album/7bthcmPk5NDr3N6wMjocrk?si=TRdzy07nSBqEzRUKr_zwXg',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_kQcJPro6ZT1kA_4gNcN_H31kc87QTItAQ',
    appleMusic: 'https://music.apple.com/us/album/stavo/1733600211'
  },
]

const MusicCatalog = () => {
  return (
    <div className=''>
      <div className="font-extrabold text-3xl duration-150 fade-in">Recent Projects</div>
      <div className="grid grid-cols-1 border-white">
        {/* SONG CATALOG  */}
        {catalogList.map((song) => {
          return (
            <CatalogCard 
              key={`${song.albumTitle}-key`} 
              albumTitle={song.albumTitle} 
              img={song.img} 
              artist={song.artist} 
              instagram={song.instagram}
              spotify={song.spotify}
              youtube={song.youtube}
              appleMusic={song.appleMusic}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MusicCatalog;