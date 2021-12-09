import React from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const ArtImage = ({ largeImage, smallImage, alt, ...props }) => {
  const images = withArtDirection(getImage(largeImage), [
    {
      media: "(max-width: 1024px)",
      image: getImage(smallImage),
    },
  ])
  return <GatsbyImage image={images} alt={alt} {...props} />
}

export default ArtImage
