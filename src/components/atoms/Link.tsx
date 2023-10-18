import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"
import cn from "@/utils/cn"

// type LinkProps = {
//   className,
//   ...restProps
// } : PrismicNextLinkProps

export default function Link({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  // TODO: Update styling with Tailwind in the class names
  return (
    <PrismicNextLink
      className={cn(
        "text-blue-700 underline-offset-2 decoration-sky-500 ",
        className
      )}
      {...restProps}
    />
  )
}
