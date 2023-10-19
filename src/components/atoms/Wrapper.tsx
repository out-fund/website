import cn from "@/lib/cn"

type WrapperProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

export default function Wrapper({
  as: Comp = "div",
  className,
  children,
  ...restProps
}: WrapperProps) {
  return (
    // TODO: Update styling with Tailwind in the class names
    <Comp
      className={cn(" mx-auto max-w-[1200px] w-full", className)}
      {...restProps}
    >
      {children}
    </Comp>
  )
}
