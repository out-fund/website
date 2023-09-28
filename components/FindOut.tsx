import { locales, getHref } from "@/i18n-config"

export default function FindOut(props: {
  title: string | React.ReactNode
  description: string
  title2: string
  list: any[]
  children: React.ReactNode
}) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>{props.title2}</h3>
        <ul>
          {props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>{props.children}</div>
    </section>
  )
}
