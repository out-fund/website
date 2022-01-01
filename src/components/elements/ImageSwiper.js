import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import shuffle from "../../utils/shuffle"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"

import SwiperCore, { FreeMode, Autoplay } from "swiper"
SwiperCore.use([FreeMode, Autoplay])

const ImageSwiper = ({ data }) => {
  const images = shuffle(data)
  return (
    <Wrapper>
      <Swiper
        freeMode={true}
        grabCursor={true}
        speed={9000}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 24,
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image>
              <GatsbyImage image={getImage(item.src)} alt={item.name} />
              <Name>{item.name}</Name>
            </Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}
export default ImageSwiper

const Image = styled.div`
  position: relative;
  /* width: 160px; */
  /* width: 50%; */
  /* height: 200px; */
  /* object-fit: cover; */
`
const Name = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`

const Wrapper = styled.div`
  background-color: #afa;
  .swiper {
    /* width: 100%;
    height: 100%; */
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 160px;
    height: 200px; */
    background: #faf;
    user-select: none;
  }
`
