import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

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
      Placeholder component for clients_say (variation: {slice.variation})
      Slices
    </section>
  )
}

export default ClientsSay
