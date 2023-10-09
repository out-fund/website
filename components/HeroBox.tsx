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
        <div className="bg-bgDark grid grid-cols-2 rounded-lg">
          <div className="flex flex-col gap-6 pb-7 pl-[100px] pt-7">
            <div className="flex flex-col gap-2 ">
              <Heading1>{props.title}</Heading1>
              <Description>{props.description}</Description>
            </div>
            <div className="flex flex-col items-start gap-1	">
              <Button>{props.button}</Button>
              <div className="text-xs opacity-70">{props.note}</div>
            </div>
          </div>
          <div className="self-end justify-self-center">
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
