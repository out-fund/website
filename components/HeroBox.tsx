// import { locales, getHref } from "@/i18n-config"
import Image from "next/image"
import pugImage from "@/public/images/pug.png"

import classes from "./HeroBox.module.scss"
import typography from "@/styles/Typography.module.scss"
import layout from "@/styles/Layout.module.scss"

import { Wide, Button, Description, Heading1 } from "@/components/atoms"

export default function HeroBox(props: {
  title: string | React.ReactNode
  description: string
  button: string
  note: string
}) {
  return (
    <section>
      <Wide>
        <div className={classes.heroBox}>
          <div className={classes.left}>
            <div className="textWrapper">
              <Heading1>{props.title}</Heading1>
              <Description>{props.description}</Description>
            </div>
            <div className={layout.buttonWrapper}>
              <Button>{props.button}</Button>
              <div className={typography.note}>{props.note}</div>
            </div>
          </div>
          <div className={classes.right}>
            <Image
              src={pugImage}
              width={424}
              height={427}
              alt="Picture of a dog thinking about applying for a loan"
              priority={true}
              placeholder="blur"
              quality={75}
            />
          </div>
        </div>
      </Wide>
    </section>
  )
}
