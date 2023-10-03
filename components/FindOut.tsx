// import { locales, getHref } from "@/i18n-config"

import {
  Medium,
  Heading2,
  Description,
  Heading3,
  CheckList,
} from "@/components/atoms"

import classes from "./FindOut.module.scss"

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
        <div className={classes.findOut}>
          <div className={classes.left}>
            <div className="top">
              <Heading2>{props.title}</Heading2>
              <Description>{props.description}</Description>
            </div>
            <div className="bottom">
              <Heading3>{props.title2}</Heading3>
              <CheckList items={props.list} />
            </div>
          </div>
          <div className={classes.right}>{props.children}</div>
        </div>
      </Medium>
    </section>
  )
}
