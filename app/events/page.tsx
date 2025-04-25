import { getEvents } from "../actions/eventActions";

const Events = async() => {
  const events = await getEvents()
  console.log('events: ', events)
  return (
    <div>
      
    </div>

  )
}

export default Events;