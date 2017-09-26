export const BLOAT = "BLOAT"
export const SHRINK = "SHRINK"

let bloat = (size) => {
  return {
    type: BLOAT,
    size
  }
}

let shrink = (size) => {
  return {
    type: SHRINK,
    size
  }
}

export { bloat, shrink };
