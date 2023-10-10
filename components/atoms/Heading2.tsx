import { cn } from "@/lib/utils"

type HeadingProps = {
  className?: string
  children: React.ReactNode
}

const Heading2 = (props: HeadingProps) => {
  return (
    <h2 className={cn("text-3xl font-extrabold", props.className)}>
      {props.children}
    </h2>
  )
}

export default Heading2
