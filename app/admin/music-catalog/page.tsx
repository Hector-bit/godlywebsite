import Image from "next/image"

const songsList = [
  {
    name: 'TItle1',
    img: 'song1.jpg'
  },
  {
    name: 'TItle2',
    img: 'song2.jpg'
  },
  {
    name: 'TItle3',
    img: 'song3.jpg'
  },
]

const MusicCatalog = () => {
  return (
    <div className='border border-red-500'>
      <div className="font-semibold text-3xl">Recent Projects</div>
      <div className="grid grid-cols-1 gap-4 divide-y-2 border-white">
        {songsList.map((song) => {
          return (
            <div key={song.name} className="flex flex-row gap-x-5">
              <Image
                className="" 
                src={`/images/songImages/${song.img}`} 
                alt={"song cover"} width={250} height={250}
              />
              <div className="flex flex-col">
                <div className="font-semibold text-textSecondary">January </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MusicCatalog;