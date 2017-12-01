export const CHANGE = "CHANGE"

let change = (size) => {
  return {
    type: CHANGE,
    size
  }
}

export { change };
