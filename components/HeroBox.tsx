// import { locales, getHref } from "@/i18n-config"
import Image from "next/image"
import pugImage from "@/public/images/pug.png"

import classes from "./HeroBox.module.scss"
import typography from "@/styles/Typography.module.scss"
import layout from "@/styles/Layout.module.scss"

import { Wide, Button, Description, Heading1 } from "@/components/atoms"

type HeroBoxProps = {
  title: string
  description: string
  button: string
  note: string
  image: JSX.Element
}

export default function HeroBox(props: HeroBoxProps) {
  return (
    <section>
      <Wide>
        <div className="grid grid-cols-2 rounded-lg bg-bgDark">
          <div className="flex flex-col gap-6 pb-7 pl-[100px] pt-7">
            <div className="flex flex-col gap-2 ">
              <Heading1>{props.title}</Heading1>
              <Description>{props.description}</Description>
            </div>
            <div className="flex flex-col items-start gap-1	">
              <Button>{props.button}</Button>
              <div className="text-xs tracking-tight opacity-70">
                {props.note}
              </div>
            </div>
          </div>
          <div className="self-end justify-self-center">
            {props.image}
            {/* <Image
              src={pugImage}
              width={424}
              height={427}
              alt="Picture of a dog thinking about applying for a loan"
              priority={true}
              placeholder="blur"
              quality={75}
            /> */}
          </div>
        </div>
      </Wide>
    </section>
  )
}
