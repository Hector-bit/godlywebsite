'use server'
import { SongType } from "../lib/types/songType"

const apiUrl = process.env.API_URL

export const getSongsByArtistId = async(artistId: string):Promise<SongType | undefined>=> {
  const requestUrl = `${apiUrl}/songs?artistId=${artistId}`

  try{
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('error fetching artists: ', error)
  }
}

// TODO: GET RID OF THIS OR REPLACE 
export const getSinglesByArtistId = async(artistId: string):Promise<SongType[] | undefined> => {

  const requestUrl = `${apiUrl}/songs?artistId=${artistId}&isSingle=true`

  try{
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
  } catch(error) {
    console.error('could not fetch artist songs: ', error)
    return undefined
  }
}