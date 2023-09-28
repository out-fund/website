import { locales, getHref } from "@/i18n-config"

export default function HeroBox(props: {
  title: string | React.ReactNode
  description: string
  button: string
  note: string
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>{props.button}</button>
      <div>{props.note}</div>
    </div>
  )
}
