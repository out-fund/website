const br = {
  p: {
    s: 0,
    m: 320,
    l: 380,
  },
  t: {
    s: 500,
    m: 720,
    l: 970,
  },
  l: {
    m: 1200,
    l: 1390,
  },
  d: {
    m: 1600,
    l: 1870,
  },
}

// Above needs to be about less than most common
// Max content for that sceen needs to bee 100px lower than sceen

const above = {
  p: {
    s: `@media (min-width: ${br.p.s}px)`, // 0 - 320 default CSS withou media quarry
    m: `@media (min-width: ${br.p.m}px)`, // 320 - 380
    l: `@media (min-width: ${br.p.l}px)`, // 380 - 500
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

// const mW = {
//   full: `100%`,
//   d: {
//     l: {
//       w: "92.1875wv",
//       mw: "1770px",
//     },
//   },
// }

// const content = {
// full: `100%`,
// d: {
//   l: {
//     w: "92.1875wv",
//     mw: "1770px",
//   },
// },
// }

// const width2 = {
//   xs: "770px",
//   s: "970px",
//   m: "1170px",
//   l: "1270px",
//   ll: "1370px",
//   xl: "1470px",
//   xxl: "1570px",
//   max: "1770px",
//   full: "100%",
// }
