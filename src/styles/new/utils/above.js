import { br } from "./../tokens/breakpoints"

export const above = {
  p: {
    s: `@media (min-width: ${br.p.s}px)`, // 0 - 370 default CSS withou media quarry
    m: `@media (min-width: ${br.p.m}px)`, // 370 - 420
    l: `@media (min-width: ${br.p.l}px)`, // 420 - 500
  },
  t: {
    s: `@media (min-width: ${br.t.s}px)`, // 500 - 720
    m: `@media (min-width: ${br.t.m}px)`, // 720 - 970
    l: `@media (min-width: ${br.t.l}px)`, // 970 - 1200
  },
  l: {
    m: `@media (min-width: ${br.l.m}px)`, // 1200 - 1390
    l: `@media (min-width: ${br.l.l}px)`, // 1390 - 1600
  },
  d: {
    m: `@media (min-width: ${br.d.m}px)`, // 1600-1870
    l: `@media (min-width: ${br.d.l}px)`, // 1870-
  },
}
