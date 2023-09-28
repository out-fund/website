import { locales, getHref } from "@/i18n-config"

export default function HeroBox(props: { title: string; description: string }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>Check eligibility</button>
      <div>It won’t affect your credit score</div>
    </div>
  )
}
