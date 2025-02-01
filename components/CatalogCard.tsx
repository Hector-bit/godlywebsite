import Image from "next/image"
import Link from "next/link";
import { CatalogType } from "@/types/types";

const CatalogCard = (catalog:CatalogType) => {
  return (
      <div className="_project flex flex-col sm:flex-row justify-center sm:justify-start gap-x-5 py-5">
        <Image
          className="rounded-xl border-2 border-white" 
          src={`/images/catalog/${catalog.img}`} 
          alt={"song cover"} width={250} height={250}
        />
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col justify-between">
            <div className="my-2">
              {/* <div className="font-semibold text-textSecondary">January 1st 2001</div> */}
              {/* <div className="font-semibold text-textSecondary">Song: songname</div> */}
              <div className="font-medium text-xl">{catalog.artist}</div>
              {/* <div className="font-semibold text-textSecondary">Social media: insta, face, youtube, etc.</div> */}
            </div>
          </div>
          {/* <iframe className="" src="https://open.spotify.com/embed/track/1opv3Bc13TtQE73ECiiE15?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
          <div className="flex flex-row gap-x-2">
            {catalog.spotify && (
              <Link target="_blank" href={catalog.spotify}>
                <Image src={'/images/sociallogos/spotify.svg'} width={50} height={50} alt="spotify"/>
              </Link>
            )}
            {catalog.instagram && (
              <Link target="_blank" href={catalog.instagram}>
                <Image src={'/images/sociallogos/instagram.svg'} width={50} height={50} alt="instagram"/>
              </Link>
            )}
            {catalog.appleMusic && (
              <Link target="_blank" href={catalog.appleMusic}>
                <Image src={'/images/sociallogos/apple-music.svg'} width={50} height={50} alt="apple Music"/>
              </Link>
            )}
            {catalog.youtube && (
              <Link target="_blank" href={catalog.youtube}>
                <Image src={'/images/sociallogos/youtube.svg'} width={50} height={50} alt="youtube"/>
              </Link>
            )}

          </div>

        </div>
      </div>
  )
}

export default CatalogCard;