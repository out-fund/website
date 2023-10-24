import { cn } from "@/lib/utils"

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
    <Comp
      className={cn(
        " text-6xl font-extrabold	tracking-tight text-heading ",
        size ? size : Comp,
        className,
      )}
    >
      {children}
    </Comp>
  )
}
