import Image from "next/image"
import { CatalogType } from "@/types/types"
import CatalogCard from "@/components/CatalogCard"

const catalogList:CatalogType[] = [
  {
    albumTitle: 'Soul Searching',
    img: 'soulsearching.jpg',
    artist: 'Chelsey Monique',
    spotify: 'https://open.spotify.com/album/2traKNQMVyH8Pl9s1wInaA?si=BGyzv78cSf6KubvHVCnchw',
    youtube: 'https://www.youtube.com/watch?v=4s84mFA8edI'
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
  {
    albumTitle: 'Dsmirk',
    img: 'want2.jpg',
    artist: 'Dsmirk',
    instagram: 'https://www.instagram.com/whodat.d_smirkyuh/',
    spotify: 'https://open.spotify.com/album/7bthcmPk5NDr3N6wMjocrk?si=TRdzy07nSBqEzRUKr_zwXg',
    youtube: 'https://www.youtube.com/watch?v=3so0KhMlQHk',
    appleMusic: 'https://music.apple.com/us/album/want-2-feat-meech-da-don/1706853780?i=1706853782'
  },
  {
    albumTitle: 'XEON',
    img: 'xeon.jpg',
    artist: 'XEON',
    instagram: 'https://www.instagram.com/ltmxeon/',
    spotify: 'https://open.spotify.com/track/1opv3Bc13TtQE73ECiiE15?si=79be8324811246c6',
    youtube: 'https://youtu.be/VcWg9yNenpE?si=Zy43Nle2ub_urAGB',
    appleMusic: 'https://music.apple.com/us/album/4-deep/1727769711?i=1727769722'
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