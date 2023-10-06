import Link from "next/link"
import { getHref } from "@/i18n-config"
import { cn } from "@/lib/utils"
// import type { ValidLocale } from "@/i18n-config"

type PageLinkProps = {
  className?: string
  href?: string
  locale?: string
  page?: string
  children: React.ReactNode
}

const PageLink = (props: PageLinkProps) => {
  if (props.href)
    return (
      <Link
        href={props.href}
        className={cn(
          "text-cobalt text-base font-[500] tracking-tight antialiased hover:underline",
          props.className,
        )}
      >
        {props.children}
      </Link>
    )
  return (
    <Link
      href={getHref(props.locale!, props.page!)}
      className={cn(
        "text-cobalt text-base font-[500] tracking-tight antialiased hover:underline",
        props.className,
      )}
    >
      {props.children}
    </Link>
  )
}

export default PageLink
