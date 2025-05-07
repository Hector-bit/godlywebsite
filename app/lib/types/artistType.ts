import { AlbumType } from "./albumType"

export type ArtistType = {
  _id: string
  name: string
  artistName?: string
  albums: AlbumType[]
  img: string
  __v: number
}


