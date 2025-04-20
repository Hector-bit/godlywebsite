import Link from "next/link"
import { ReactNode } from "react"


export default function ButtonLink (props: {url: string, children: ReactNode}) {
  return (
    <Link href={props.url} className="p-2 border-2 border-white rounded-xl w-fit">
      {props.children}
    </Link>
  )
}