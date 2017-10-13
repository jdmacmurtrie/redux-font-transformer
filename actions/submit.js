export const SUBMIT = "SUBMIT"

let submit = (submission) => {
  return {
    type: SUBMIT,
    submission
  }
}

export { submit };
