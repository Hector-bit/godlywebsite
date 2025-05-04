import { getArtist } from "@/app/actions/artistActions"
import { getSongsByArtistId } from "@/app/actions/songActions"
import AlbumCarousel from "@/components/AlbumCarousel"

export default async function ArtistPage (props: { params: Promise<{artistId: string}>}) {
  const params = await props.params
  const artistId = params.artistId

  const artistInfo = await getArtist(artistId)
  const artistSongs = await getSongsByArtistId(artistId)

  console.log('artist songs: ', artistSongs)

  return (
    <div className="">
      <div>Artist page</div>
      <div>{artistInfo?.name}</div>
      <AlbumCarousel/>
    </div>
  )
}




