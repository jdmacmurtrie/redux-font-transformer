export const ADDCLICKABLE = "ADDCLICKABLE"

let addClickable = (newValue) => {
  return {
    type: ADDCLICKABLE,
    newValue
  }
}

export { addClickable };
