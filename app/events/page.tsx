import { getEvents } from "../actions/eventActions";
import EventList from "@/components/EventsList";

const Events = async() => {
  const events = await getEvents()
  console.log('events: ', events)
  return (
    <div className="flex flex-col">
      <EventList eventsList={events}/>
    </div>

  )
}

export default Events;