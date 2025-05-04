import { EventType } from "@/app/lib/types/eventType";
import Link from "next/link";
import Image from "next/image";

const EventList = (props: {eventsList: EventType[]}) => {

  const eventsList = props.eventsList 

  return (
    <div className="flex flex-col">
      {eventsList.map((event) => {
        const eventImg = event.imgLink ? event.imgLink : 'globe.svg'
        const eventLink = event.link ? event.link : 'https://godlyproductions.com/'

        return (
          <div key={event._id} className="flex flex-col sm:flex-row justify-between border-y-2 border-white p-4 rounded-xl gap-6">
            <div className="flex flex-col gap-3 w-1/3">
              <div className="font-bold text-xl">{event.title}</div>
              <Image className="max-h-auto w-full border border-white rounded-xl" src={eventImg} alt={"event"} width={600} height={600}/>
            </div>
            <div className="flex flex-col order-1 sm:order-2 gap-4 items-end w-2/3">
              <div>{event.description}</div>
              <Link className="text-cyan-600 " href={eventLink}>Event Link</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default EventList;

