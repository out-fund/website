import { locales, getHref } from "@/i18n-config"

export default function AboutUs(props: {
  title: string | React.ReactNode
  description: string
}) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
