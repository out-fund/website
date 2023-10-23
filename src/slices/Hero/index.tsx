import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react"

import { Wrapper, Button, Heading } from "@/components/atoms"

const components: JSXMapSerializer = {
  // heading1: ({ children }) => <h1 className="">{children}</h1>,
  heading1: ({ children }) => (
    <Heading as="h1" className="test">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="">{children}</p>,
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Wrapper>
        {/* TODO: Update styling with Tailwind in the class names */}
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
        {/* <Link href="/">{slice.primary.button_text}</Link> */}
        <Button href="/">{slice.primary.button_text}</Button>
        <PrismicNextImage field={slice.primary.image} />
      </Wrapper>
    </section>
  )
}

export default Hero
