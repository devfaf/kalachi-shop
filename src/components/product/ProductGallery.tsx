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
    <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">

      {/* Main image */}
      <div className="w-full overflow-hidden rounded-xl border bg-white">
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="flex aspect-square w-full items-center justify-center p-3 sm:p-5">
                <img
                  src={image}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 w-full sm:mt-4">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={8}
          watchSlidesProgress
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="aspect-square overflow-hidden rounded-lg border bg-white p-1 sm:p-2">
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