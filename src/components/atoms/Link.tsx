import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"
import { cn } from "@/lib/utils"

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
        "text-base font-[500] text-cobalt underline-offset-2 antialiased hover:underline focus:underline focus:outline-none",
        className,
      )}
      {...restProps}
    />
  )
}
