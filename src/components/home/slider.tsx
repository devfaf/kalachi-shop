"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const HomeSlider = () => {
  const slides = [
    "images/slider/1.png",
    "images/slider/2.webp",
    "images/slider/3.webp",
  ]

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full"
    >
      {slides.map((image) => (
        <SwiperSlide key={image}>
          <img
            src={image}
            alt="اسلاید فروشگاه کالاچی"
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeSlider