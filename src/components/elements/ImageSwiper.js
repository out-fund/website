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
          1100: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView: 8,
            spaceBetween: 24,
          },
          1600: {
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
  box-shadow: 0px 17px 33px rgba(5, 24, 64, 0.07),
    0px 3.8002px 13.45px rgba(5, 24, 64, 0.0522616),
    0px 1.07885px 7.14579px rgba(5, 24, 64, 0.0377807);
  border-radius: 10px;
  overflow: hidden;
  /* width: 160px; */
  /* width: 50%; */
  /* height: 200px; */
  /* object-fit: cover; */
`
const Name = styled.div`
  position: absolute;
  bottom: 16px;
  right: 24px;
  font-size: 16px;
  color: #fff;
`

const Wrapper = styled.div`
  /* background-color: #afa; */
  .swiper {
    /* width: 100%;
    height: 100%; */
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 160px;
    height: 200px; */

    user-select: none;
  }
`
