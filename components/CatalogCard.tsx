import Image from "next/image"
import { CatalogType } from "@/types/types";

const CatalogCard = (catalog:CatalogType) => {
  return (
      <div className="_project flex flex-col sm:flex-row justify-center sm:justify-start gap-x-5 py-8">
        <Image
          className="rounded-xl border border-white" 
          src={`/images/catalog/${catalog.img}`} 
          alt={"song cover"} width={250} height={250}
        />
        <div className="flex flex-col justify-between">
          <div>
            {/* <div className="font-semibold text-textSecondary">January 1st 2001</div> */}
            {/* <div className="font-semibold text-textSecondary">Song: songname</div> */}
            <div className="font-semibold text-textSecondary">Artist: {catalog.artist}</div>
            <div className="font-semibold text-textSecondary">Social media: insta, face, youtube, etc.</div>
          </div>
          <div>
            {'Checkout song on => spotify?, apple?, youtube? insta?'}
          </div>
        </div>
        {catalog.spotify && (
          <div>spotify</div>
        )}
        {catalog.youtube && (
          <div>youtube</div>
        )}
      </div>
  )
}

export default CatalogCard;