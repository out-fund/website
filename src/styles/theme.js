import { colors } from "./colorStyles"

const width = {
  text: "1170px",
  content: "1370px",
  image: "1570px",
  max: "1770px",
}

const shadows = {
  boxShadow:
    "0px 0.6px 1.3px rgba(1, 53, 113, 0.011), 0px 1.3px 3.2px rgba(1, 53, 113, 0.015), 0px 2.5px 6px rgba(1, 53, 113, 0.017), 0px 4.5px 10.7px rgba(1, 53, 113, 0.019), 0px 8.4px 20.1px rgba(1, 53, 113, 0.022), 0px 20px 48px rgba(1, 53, 113, 0.03), inset 0px 0px 0px 0.5px rgba(1, 53, 113, 0.1)",
}

export const theme = {
  ...colors,
  width,
  shadows,
}
