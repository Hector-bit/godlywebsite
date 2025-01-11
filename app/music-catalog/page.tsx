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
    <div className=''>
      <div className="font-semibold text-3xl">Recent Projects</div>
      <div className="grid grid-cols-1 divide-y-2 border-white">
        {songsList.map((song) => {
          return (
            <div key={song.name} className="_project flex flex-row gap-x-5 py-8">
              <Image
                className="rounded-xl border border-white" 
                src={`/images/songImages/${song.img}`} 
                alt={"song cover"} width={250} height={250}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-textSecondary">January 1st 2001</div>
                  <div className="font-semibold text-textSecondary">Song: songname</div>
                  <div className="font-semibold text-textSecondary">Artist: artistname</div>
                  <div className="font-semibold text-textSecondary">Social media: insta, face, youtube, etc.</div>
                </div>
                <div>
                  {'Checkout song on => spotify?, apple?, youtube? insta?'}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MusicCatalog;