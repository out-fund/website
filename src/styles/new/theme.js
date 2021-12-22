import { color } from "./tokens/colors"
import { above } from "./utils/above"
// import { br } from "./tokens/breakpoints"

// Above needs to be about less than most common
// Max content for that sceen needs to bee 100px lower than sceen

const size = {
  navbarHeight: 64,
}

export const theme = {
  above,
  color,
  size,
}
