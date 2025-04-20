'use server'

const apiUrl = process.env.API_URL


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

