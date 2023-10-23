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
      className={cn(" mx-auto w-full max-w-[1200px]", className)}
      {...restProps}
    >
      {children}
    </Comp>
  )
}
