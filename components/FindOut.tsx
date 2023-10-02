import { locales, getHref } from "@/i18n-config"

import { Medium, Heading2, Description, Heading3 } from "@/components/atoms"

import classes from "./FindOut.module.scss"

export default function FindOut(props: {
  title: string | React.ReactNode
  description: string
  title2: string
  list: any[]
  children: React.ReactNode
}) {
  return (
    <section id="find-out">
      <Medium>
        <div className={classes.findOut}>
          <div className={classes.left}>
            <Heading2>{props.title}</Heading2>
            <Description>{props.description}</Description>
            <Heading3>{props.title2}</Heading3>
            <ul>
              {props.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={classes.right}>{props.children}</div>
        </div>
      </Medium>
    </section>
  )
}
