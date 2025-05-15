import { getArtist } from "@/app/actions/artistActions"
import { getSinglesByArtistId, getSongsByArtistId } from "@/app/actions/songActions"
import { getAlbumsByArtistId } from "@/app/actions/albumActions"
import AlbumCarousel from "@/components/AlbumCarousel"
import { ArtistNameHelper } from "@/app/lib/helperfns/artistNameHelper"
import SingleCard from "@/components/cards/SingleCard"

export default async function ArtistSinglePage (props: { params: Promise<{artistId: string}>}) {
  const params = await props.params
  const artistId = params.artistId

  // TODO: setup promise await all for these 2 calls
  const artistInfo = await getArtist(artistId)
  const artistSingles = await getSinglesByArtistId(artistId)

  // console.log('artist songs: ', artistSingles)

  return (
    <div className="flex flex-col gap-8">
      <div className="font-bold text-xl">{ArtistNameHelper(artistInfo)}</div>
      {/* <AlbumCarousel albumList={artistAlbums?artistAlbums:[]}/> */}
      {artistSingles && artistSingles?.length > 0 
      ?artistSingles?.map((single) => {
        return (
          <SingleCard key={single._id} Single={single}/>
        )
      })
      :<div className="flex justify-center font-bold text-xl">
        <div>This artist has no singles</div>
      </div>
      }
    </div>
  )
}




