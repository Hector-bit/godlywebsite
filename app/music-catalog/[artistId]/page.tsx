import { getArtist } from "@/app/actions/artistActions"
import { getSongsByArtistId } from "@/app/actions/songActions"
import { getAlbumsByArtistId } from "@/app/actions/albumActions"
import AlbumCarousel from "@/components/AlbumCarousel"
import { ArtistNameHelper } from "@/app/lib/helperfns/artistNameHelper"

export default async function ArtistPage (props: { params: Promise<{artistId: string}>}) {
  const params = await props.params
  const artistId = params.artistId

  const artistInfo = await getArtist(artistId)
  const artistSongs = await getSongsByArtistId(artistId)
  const artistAlbums = await getAlbumsByArtistId(artistId)

  // console.log('artist songs: ', artistSongs, artistAlbums)

  return (
    <div className="flex flex-col gap-8">
      <div className="font-bold text-xl">{ArtistNameHelper(artistInfo)}</div>
      <AlbumCarousel albumList={artistAlbums?artistAlbums:[]}/>
    </div>
  )
}




