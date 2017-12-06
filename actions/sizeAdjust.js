export const CHANGE = "CHANGE"

let change = (selectedId) => {
  return {
    type: CHANGE,
    selectedId
  }
}

export { change };
