import cn from "@/lib/cn"

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
  children: React.ReactNode
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Heading({
  as: Comp,
  className,
  children,
  size,
}: HeadingProps) {
  return (
    <Comp className={cn(" bg-slate-300 ", size ? size : Comp, className)}>
      {children}
    </Comp>
  )
}
