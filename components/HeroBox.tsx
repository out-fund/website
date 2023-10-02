// import { locales, getHref } from "@/i18n-config"
import Image from "next/image"
import pugImage from "@/public/images/pug.png"

import classes from "./HeroBox.module.scss"
import Wide from "./atoms/Wide"
import Button from "./atoms/Button"

export default function HeroBox(props: {
  title: string | React.ReactNode
  description: string
  button: string
  note: string
}) {
  return (
    <Wide>
      <div className={classes.heroBox}>
        <div className={classes.left}>
          <h1 className={classes.title}>{props.title}</h1>
          <p className={classes.description}>{props.description}</p>
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
  )
}
