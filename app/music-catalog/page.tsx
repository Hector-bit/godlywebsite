import Image from "next/image"
import { CatalogType } from "@/types/types"
import CatalogCard from "@/components/CatalogCard"

const catalogList:CatalogType[] = [
  {
    albumTitle: 'Soul Searching',
    img: 'soulsearching.jpg',
    artist: 'Chelsey Monique'
  },
  {
    albumTitle: 'Stavos',
    img: 'stavo.jpg',
    artist: 'Stavos'
  },
]

const MusicCatalog = () => {
  return (
    <div className=''>
      <div className="font-extrabold text-3xl underline">Recent Projects</div>
      <div className="grid grid-cols-1 divide-y-2 border-white">
        {/* SONG CATALOG  */}
        {catalogList.map((song) => {
          return (
            <CatalogCard 
              key={`${song.albumTitle}-key`} 
              albumTitle={song.albumTitle} 
              img={song.img} 
              artist={song.artist} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default MusicCatalog;