import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `TrustPilotStrip`.
 */
export type TrustPilotStripProps =
  SliceComponentProps<Content.TrustPilotStripSlice>

/**
 * Component for "TrustPilotStrip" Slices.
 */
const TrustPilotStrip = ({ slice }: TrustPilotStripProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trust_pilot_strip (variation: {slice.variation})
      Slices
    </section>
  )
}

export default TrustPilotStrip
