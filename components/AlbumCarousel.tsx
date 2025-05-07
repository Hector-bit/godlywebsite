'use client'
import { EffectCoverflow, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { AlbumType } from "@/app/lib/types/albumType";


export default function AlbumCarousel (props: { albumList: AlbumType[] }) {


  const albumList = props.albumList



  return (
    albumList.length !== 0
    ?<div className="">
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {albumList.map(album => {
          return (
            <SwiperSlide>
              <div className="text-center font-bold text-xl mb-2">{album.albumName}</div>
              <div className="w-[300px] h-[300px]">
              <img src={album?.img ? album.img : '/globe.svg'} />
              </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
      {/* ALBUM SONGS */}
      <div className="flex flex-col my-6">
        {albumList[0].albumSongs?.map((albumSong) => {
          return (
            <div className="flex flex-col">
              <div className="font-bold text-xl">{albumSong.songName}</div>
              {/* SONG DETAILS */}
              <div className="flex flex-col gap-3 p-2">
                <div>{albumSong.spotifyLink}</div>
                <div>{albumSong.youtubeLink}</div>
              </div>

            </div>
          )
        })}

      </div>
    </div>

    // NO ALBUMS IN LIST 
    :<div className="flex justify-center font-bold text-xl">
      <div>This artist has no albums</div>
    </div>
  )
}