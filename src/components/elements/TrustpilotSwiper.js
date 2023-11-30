import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import T from "./../../styles/new/typography"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"

import SwiperCore, { FreeMode, Autoplay } from "swiper"
SwiperCore.use([FreeMode, Autoplay])

const data = [
  {
    title: "Really simple and smooth process",
    review:
      "Really simple and smooth process. Friendly and attentive team helped us to quickly sort out a much needed cash injection for our business. Shoutout to Lela for getting back to us quickly and efficiently to get our application processed within a few days.",
    name: "JS",
    date: "03 July 2023",
    url: "https://uk.trustpilot.com/reviews/64a55e0c5d633c3afabad665",
  },
  {
    title: "Exceptional service",
    review:
      "Outfund delivered an exceptional service and acted promptly. As an online business owner, if you're searching for a partner for growth and financing, then Outfund should be your go-to option. They granted us funding at a rate much faster than a traditional lender, and with significantly better conditions. A special acknowledgment goes to Jackson from the UK team, who led us through the procedure and enthusiastically advocated for our business. Their service is outstanding, earning a full 5/5 rating, and I highly endorse them.",
    name: "Steven",
    date: "23 June 2023",
    url: "https://uk.trustpilot.com/reviews/64a6b573a4074326a1f247ef",
  },
  {
    title: "Great team, easy onboarding, no problems",
    review:
      "The Outfund team are super - always eager to help and go beyond. We needed a revenue based debt solution to smooth out our seasonality. We approached a few companies, and most wanted us to jump through so many hoops to sign up. Outfund made the onboarding easy, their online tools are simple to use, and the team were always there to answer questions.",
    name: "Jamie Brown",
    date: "01 June 2022",
    url: "https://uk.trustpilot.com/reviews/6474929ad9f677da1c9520db",
  },
  {
    title: "Great to work with them",
    review:
      "Great to work with them. Very positive experience. They're quick to respond, and always supportive.",
    name: "Wissam Chouceir",
    date: "30 Jun 2023",
    url: "https://uk.trustpilot.com/reviews/649eca8384f432390ff98e0e",
  },
  {
    title: "The entire experience with Outfund has",
    review:
      "The entire experience with Outfund has been great. The sales people have all the answers and the system is easy to use and understand. We've got the funding we needed, when we needed it and on a good repayment that worked for us - and it was cheaper than our previous lender!",
    name: "Michal Szlas",
    date: "30 May 2023",
    url: "https://uk.trustpilot.com/reviews/64762498eac8df8988eda875",
  },
  {
    title: "Great option for a small business",
    review:
      "We've been with Outfund for two years now. The whole process of getting funds has always been smooth and the team is very friendly and always happy to answer any questions.",
    name: "Dogs Lounge",
    date: "01 June 2023",
    url: "https://uk.trustpilot.com/reviews/64787dc386cf099bb98e9c29",
  },
  {
    title: "We have had several tranches of funding…",
    review:
      "We have had several tranches of funding from Outfund for stock purchasing and marketing. Rob and the team were extremely helpful and attentive, not only in the funding process itself but in various aspects of business advice that they have expertise in.",
    name: "Matt Connelley",
    date: "02 June 2022",
    url: "https://uk.trustpilot.com/reviews/6479e13f8f42ae6b28dd9835",
  },
  {
    title: "Great team. Great communication",
    review:
      "Great team. Very responsive and committed. Been working with them for 2+ years and raised several times with them.",
    name: "Joel",
    date: "01 June 2023",
    url: "https://uk.trustpilot.com/reviews/64804262a03cdcbab1686580",
  },
  {
    title:
      "I found Outfund after looking for a reliable funding partner to expand my agency.",
    review:
      "I found Outfund after looking for a reliable funding partner to expand my agency. They have been outstanding from day 1 with amazing customer support and helpful explanations of how the service works.Highly recommended if you need an ethical growth partner.",
    name: "Keith Dean",
    date: "16 January 2023",
    url: "https://uk.trustpilot.com/reviews/6463523eb19eb0b7c40eb18f",
  },
  {
    title: "They're on top of it and usage of…",
    review: "They're on top of it and usage of platform is very simple",
    name: "LN",
    date: "01 October 2022",
    url: "https://uk.trustpilot.com/reviews/649c2dec516dc32d9fc9e309",
  },
  {
    title: "I highly recommend Outfund",
    review:
      "I highly recommend Outfund and in fact I am grateful for it. As a small business expanding it has been amazing for us, also the advise and guidance from the team. So thank you Outfund Clara and Ivan! If anyone asks me I will highly recommend it!",
    name: "Aisling Theresa Mackin",
    date: "02 February 2023",
    url: "https://uk.trustpilot.com/reviews/63dd24079b64b1bdaf4bff2a",
  },
  {
    title: "Excellent financial service",
    review:
      "Outfund is a company that responds to your financial requirements. They are at your side to help you grow your business with diverse financial solutions. Undoubtedly, an excellent alternative to the traditional banking sector",
    name: "Rubén Maguregui",
    date: "15 June 2022",
    url: "https://uk.trustpilot.com/reviews/64709656174cdc85774c6d4a",
  },
]

const TrustpilotSwiper = () => {
  return (
    <Wrapper>
      <Swiper
        grabCursor={true}
        // preloadImages={true}
        roundLengths={true}
        freeMode={true}
        speed={50000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.4,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Review href={item.url} target="_blank">
              <StaticImage src="./../../images/stars.png" alt="Rating stars" />
              <h4 className="title">{item.title}</h4>
              <p className="review">{item.review}</p>
              <div className="name-date">
                <span className="name">{item.name}</span>
                <span className="date">{item.date}</span>
              </div>
            </Review>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}
export default TrustpilotSwiper

const Review = styled.a`
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  width: 100%;
  padding: 16px;
  text-decoration: none;
  /* max-width: 236px; */
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #e0e5eb;

  .gatsby-image-wrapper {
    width: 108px;
    height: 20px;
  }
  .title {
    width: calc(100% - 32px);
    margin-top: 12px;
    overflow: hidden;
    color: #212935;
    font-weight: 14px;
    font-weight: 600;
    line-height: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .review {
    display: -webkit-box !important;
    height: 48px;
    margin-top: 8px;
    overflow: hidden;
    color: #191919;

    font-size: 13px;
    line-height: 16px;
    white-space: normal;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .name-date {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    font-size: 14px;
    line-height: 16px;
  }
  .name {
    color: #191919;
    font-weight: 600;
  }
  .date {
    margin-top: 4px;
    color: #636464;
    font-weight: 400;
  }
`

const Wrapper = styled.div`
  margin-top: 40px;
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
