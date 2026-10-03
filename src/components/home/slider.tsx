"use client"

import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const HomeSlider = () => {
  const slides = [
    {
      image: "/images/slider/1.png",
      href: "/products/apple-iphone-17",
    },
    {
      image: "/images/slider/2.webp",
      href: "/products/asus-vivobook-15-x1504za",
    },
    {
      image: "/images/slider/3.webp",
      href: "/products/samsung-galaxy-tab-s9",
    },
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
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <Link href={slide.href} className="block">
            <div className="relative aspect-[3/1] w-full">
              <Image
                src={slide.image}
                alt="اسلاید فروشگاه کالاچی"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeSlider

