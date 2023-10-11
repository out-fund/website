import Link from "next/link"
import { getHref } from "@/i18n-config"
import { cn } from "@/lib/utils"

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
          "text-base font-[500] text-cobalt  antialiased hover:underline focus:underline focus:outline-none",
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
        "text-base font-[500] text-cobalt  antialiased hover:underline focus:underline focus:outline-none",
        props.className,
      )}
    >
      {props.children}
    </Link>
  )
}

export default PageLink
