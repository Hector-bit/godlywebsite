'use server'

const apiUrl = process.env.API_URL


export const getEvents = async() => {
  const requestUrl = `${apiUrl}/events`

  try{
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data
  } catch (error) {
    console.error('error fetching events: ', error)
  }
}

