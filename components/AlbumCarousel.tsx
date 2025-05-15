'use client'
import { EffectCoverflow, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { AlbumType } from "@/app/lib/types/albumType";
import Spotify from "next-auth/providers/spotify";


export default function AlbumCarousel (props: { albumList: AlbumType[] }) {


  const albumList = props.albumList
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    albumList.length !== 0
    ?<div className="">
      <div className="text-center font-bold text-xl mb-2">{albumList[currentIndex].albumName}</div>
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
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
      >
        {albumList.map(album => {
          return (
            <SwiperSlide key={album._id}>
              <div className="max-w-[300px] max-h-[300px]">
                <Image className="max-h-[300px]" src={album?.img ? album.img : '/globe.svg'} alt="album cover" width={300} height={300}/>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* ALBUM SONG LIST */}
      <div className="flex flex-col my-6 border border-white rounded-xl p-3">
        {albumList[currentIndex].albumSongs?.map((albumSong) => {
          return (
            <div key={albumSong._id} className="flex flex-col gap">
              <div className="font-bold text-xl">{albumSong.songName}</div>
              {/* SONG DETAILS */}
              <div className="flex flex-row gap-3 p-2">
                {albumSong?.spotifyLink &&
                  <Link href={albumSong.spotifyLink}>
                    <Image src={"/images/sociallogos/spotify.svg"} alt={'Spotify link'} width={40} height={40}/>
                  </Link>
                }
                {albumSong?.youtubeLink &&
                  <Link href={albumSong.youtubeLink}>
                    <Image src={"/images/sociallogos/spotify.svg"} alt={'Spotify link'} width={40} height={40}/>
                  </Link>
                }
                {albumSong?.soundCloudLink &&
                  <Link href={albumSong.soundCloudLink}>
                    <Image src={"/images/sociallogos/spotify.svg"} alt={'Spotify link'} width={40} height={40}/>
                  </Link>
                }
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