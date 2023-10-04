"use client"

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
// import "./TrustPilotStripSwiper.css"

import { Wide } from "@/components/atoms"
import classes from "./TrustPilotStrip.module.scss"

export default function TrustPilotStrip(props: { reviews: any[] }) {
  return (
    <section>
      <Wide>
        <div className={classes.trustPilotStrip}>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={24}
            grabCursor={true}
            roundLengths={true}
            className={classes.swiper}
          >
            {props.reviews.map((review, index) => (
              <SwiperSlide className={classes.swiperSlide} key={index}>
                <a href={review.url} target="_blank">
                  <div className={classes.review} key={index}>
                    <div className={classes.swiperSlide__stars}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 108 20"
                      >
                        <path
                          fill="#00B67A"
                          d="M20.25 0H0v20h20.25V0ZM42.188 0h-20.25v20h20.25V0ZM64.125 0h-20.25v20h20.25V0ZM86.063 0h-20.25v20h20.25V0ZM108 0H87.75v20H108V0Z"
                        />
                        <path
                          fill="#fff"
                          d="m10.125 13.48 3.08-.772 1.286 3.917-4.366-3.146Zm7.087-5.063h-5.421l-1.666-5.042-1.667 5.042h-5.42l4.387 3.125-1.667 5.041 4.388-3.125 2.7-1.916 4.366-3.125ZM32.062 13.48l3.08-.772 1.286 3.917-4.366-3.146Zm7.088-5.063h-5.422l-1.666-5.042-1.666 5.042h-5.421l4.387 3.125-1.666 5.041 4.387-3.125 2.7-1.916 4.367-3.125ZM54 13.48l3.08-.772 1.286 3.917L54 13.479Zm7.087-5.063h-5.421L54 3.375l-1.667 5.042h-5.42l4.387 3.125-1.667 5.041 4.388-3.125 2.7-1.916 4.366-3.125ZM75.937 13.48l3.08-.772 1.287 3.917-4.367-3.146Zm7.088-5.063h-5.422l-1.666-5.042-1.666 5.042H68.85l4.387 3.125-1.666 5.041 4.387-3.125 2.7-1.916 4.367-3.125ZM97.875 13.48l3.079-.772 1.287 3.917-4.366-3.146Zm7.087-5.063h-5.421l-1.666-5.042-1.667 5.042h-5.42l4.387 3.125-1.667 5.041 4.388-3.125 2.7-1.916 4.366-3.125Z"
                        />
                      </svg>
                    </div>
                    <h6 className={classes.swiperSlide__title}>
                      {review.title}
                    </h6>
                    <p className={classes.swiperSlide__quote}>
                      {review.review}
                    </p>

                    <div className={classes.swiperSlide__whoWhenWrapper}>
                      <div className={classes.swiperSlide__who}>
                        {review.name}
                      </div>
                      <div className={classes.swiperSlide__when}>
                        {review.date}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wide>
    </section>
  )
}
