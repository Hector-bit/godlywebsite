'use server'

import { ArtistType } from "../lib/types/artistType"

const apiUrl = process.env.API_URL

export const getArtist = async(artistId: string):Promise<ArtistType | undefined>=> {
  const requestUrl = `${apiUrl}/artists/${artistId}`

  try{
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('error fetching artists: ', error)
  }
}


export const getArtists = async() => {
  const requestUrl = `${apiUrl}/artists`

  try{
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('error fetching artists: ', error)
  }
}

