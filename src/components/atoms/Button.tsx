import cn from "@/lib/cn"
import Link, { LinkProps } from "next/link"

type ButtonProps = {
  className?: string
  href: string
  children: React.ReactNode
}

export default function Button({
  className,
  href,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn("bg-cyan-400 rounded-full p-2", className)}
      {...restProps}
    >
      {children}
    </Link>
  )
}
