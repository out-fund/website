// import { locales, getHref } from "@/i18n-config"

import {
  Medium,
  Heading2,
  Description,
  Heading3,
  CheckList,
} from "@/components/atoms"

export default function FindOut(props: {
  title: string | React.ReactNode
  description: string
  title2: string
  list: any[]
  children: React.ReactNode
}) {
  return (
    <section>
      <Medium>
        <div className="mt-10 grid grid-cols-[4fr_5fr] gap-9">
          <div className="flex flex-col gap-6">
            <div className="">
              <Heading2 className="mb-2">{props.title}</Heading2>
              <Description>{props.description}</Description>
            </div>
            <div className="">
              <Heading3 className="mb-2">{props.title2}</Heading3>
              <CheckList items={props.list} />
            </div>
          </div>
          <div className="">{props.children}</div>
        </div>
      </Medium>
    </section>
  )
}
