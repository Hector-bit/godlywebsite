import { ArtistType } from "../types/artistType"

export const ArtistNameHelper = (artist: ArtistType | undefined) => {

  if(artist === undefined){
    return "No artist found"
  }

  if(artist.artistName){
    return artist.artistName
  }
  return artist.name
}

