import Link from "next/link"
import { locales, getHref } from "@/i18n-config"

export default function LocaleSwitcher() {
  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={getHref(locale, "")}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
