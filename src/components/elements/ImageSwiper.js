import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import shuffle from "../../utils/shuffle"
import T from "./../../styles/new/typography"

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
        grabCursor={true}
        preloadImages={true}
        roundLengths={true}
        freeMode={true}
        speed={9000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2.4,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 3.4,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 4.4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5.4,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 6.4,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 7.4,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView: 8.4,
            spaceBetween: 24,
          },
          1600: {
            slidesPerView: 9.4,
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
  box-shadow: 0px 17px 33px rgba(5, 24, 64, 0.07),
    0px 3.8002px 13.45px rgba(5, 24, 64, 0.0522616),
    0px 1.07885px 7.14579px rgba(5, 24, 64, 0.0377807);
  border-radius: 10px;

  img {
    overflow: hidden;
    border-radius: 10px;
  }
`
const Name = styled(T.BodySmall)`
  position: absolute;
  display: flex;
  bottom: 8px;
  right: 16px;
  z-index: 10;
  float: right;
  transform: translate3d(0, 0, 0);
  color: #fff;
`

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  .swiper {
    width: auto;
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    user-select: none;
  }
`
