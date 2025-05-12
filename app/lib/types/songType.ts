export type SongType = {
  _id: string,
  __v: number
  songName: string,
  artistId: string,
  img: string,
  albumId?: string,
  spotifyLink?: string,
  youtubeLink?: string,
  soundCloudLink?: string
}