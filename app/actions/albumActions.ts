'use server'
import { AlbumType } from "../lib/types/albumType"
import { SongType } from "../lib/types/songType"

const apiUrl = process.env.API_URL

export const getAlbumsByArtistId = async(artistId: string):Promise<AlbumType[] | undefined>=> {
  const requestUrl = `${apiUrl}/albums?artistId=${artistId}`

  try{
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('error fetching artists: ', error)
  }
}
