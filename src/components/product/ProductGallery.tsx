"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from "swiper/modules"

import "swiper/css"
import "swiper/css/thumbs"

type ProductGalleryProps = {
  images: string[]
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className="w-full">

      {/* Main image */}
      <div className="w-full overflow-hidden rounded-xl border bg-white">
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="flex aspect-square w-full items-center justify-center p-6">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 w-full">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="aspect-square overflow-hidden rounded-lg border bg-white p-2">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default ProductGallery