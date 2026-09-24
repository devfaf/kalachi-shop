"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

type ProductGalleryProps = {
  images: string[];
}


const ProductGallery = ({ images }: ProductGalleryProps) => {
  return (
    <div>
      <div>
        <Swiper>
          {
            images.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      <div>

      </div>
    </div>
  )
}
export default ProductGallery