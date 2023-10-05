import dynamic from "next/dynamic"
import Image from "next/image"
import { Medium, Heading2, Description } from "@/components/atoms"

import classes from "./OurPartners.module.scss"

export default function OurPartners(props: {
  title: string | React.ReactNode
  description: string
  logos: string[]
}) {
  return (
    <section>
      <Medium>
        <div className={classes.ourPartners}>
          <div className={classes.ourPartners__top}>
            <Heading2>{props.title}</Heading2>
            <Description>{props.description}</Description>
          </div>
          <div className={classes.ourPartners__bottom}>
            {props.logos.map((logo: any) => (
              <img
                className={classes.logo}
                key={logo}
                src={`/images/logos/logo-${logo}.svg`}
                alt={`${logo} logo`}
              />
            ))}
          </div>
        </div>
      </Medium>
    </section>
  )
}
