import { cn } from "@/lib/utils"

type HeadingProps = {
  className?: string
  children: React.ReactNode
}

const Heading3 = (props: HeadingProps) => {
  return (
    <h3 className={cn("text-2xl font-extrabold", props.className)}>
      {props.children}
    </h3>
  )
}

export default Heading3
