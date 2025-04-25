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
          <div key={event._id} className="flex flex-row justify-between border-y-2 border-white p-4 rounded-xl gap-3">
            <div className="flex flex-col gap-3">
              <div className="font-bold text-xl">{event.title}</div>
              <div>{event.description}</div>
              <Link className="text-cyan-600 " href={eventLink}>Event Link</Link>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <Image className="max-h-[200px] max-w-[200px]" src={eventImg} alt={"event"} width={200} height={200}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default EventList;

