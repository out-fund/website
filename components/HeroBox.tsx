// import { locales, getHref } from "@/i18n-config"
import Image from "next/image"
import pugImage from "@/public/images/pug.png"

import classes from "./HeroBox.module.scss"

import { Wide, Button, Description, Heading1 } from "@/components/atoms"

export default function HeroBox(props: {
  title: string | React.ReactNode
  description: string
  button: string
  note: string
}) {
  return (
    <section id="hero">
      <Wide>
        <div className={classes.heroBox}>
          <div className={classes.left}>
            <Heading1>{props.title}</Heading1>
            <Description>{props.description}</Description>
            <Button>{props.button}</Button>
            <div className={classes.note}>{props.note}</div>
          </div>
          <div className={classes.right}>
            <Image
              src={pugImage}
              width={350}
              height={427}
              alt="Picture of a dog thinking about applying for a loan"
            />
          </div>
        </div>
      </Wide>
    </section>
  )
}
