// prettier-ignore
export default function shuffle(array) {
  array = array.sort(() => Math.random() - 0.5)
  return array;
}

// Used like so
// var arr = [2, 11, 37, 42]
// shuffle(arr)
