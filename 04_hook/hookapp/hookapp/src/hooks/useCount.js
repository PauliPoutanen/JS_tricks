import { useState } from "react"

const useCount = (initialState = 0) => {
const [value, setValue] = useState(initialState)

const add =() => setValue (value => value + 1)
  const subtract = () => setValue (value => value - 1)
const zerota = () => setValue(value => initialState)
return [value, add, subtract, zerota]

}

export default useCount