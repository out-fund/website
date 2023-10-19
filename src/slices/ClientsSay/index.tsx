import { Content } from "@prismicio/client"
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react"

import Wrapper from "@/components/atoms/Wrapper"
import Heading from "@/components/atoms/Heading"
import { PrismicNextImage } from "@prismicio/next"

const components: JSXMapSerializer = {
  // heading1: ({ children }) => <h1 className="">{children}</h1>,
  heading2: ({ children }) => (
    <Heading as="h2" className="test">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="">{children}</p>,
}

/**
 * Props for `ClientsSay`.
 */
export type ClientsSayProps = SliceComponentProps<Content.ClientsSaySlice>

/**
 * Component for "ClientsSay" Slices.
 */
const ClientsSay = ({ slice }: ClientsSayProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Wrapper>
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <div className="grid">
          {slice.items.map((item, index) => (
            <div key={index}>
              {item.company_name}
              <PrismicNextImage field={item.company_logo} />
              <PrismicRichText field={item.quote} components={components} />
              <PrismicNextImage
                field={item.profile_image}
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                }}
              />
              {item.author}
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ClientsSay
