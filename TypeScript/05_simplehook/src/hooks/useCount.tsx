import {useState} from 'react'

const useCount = (initialState = 0):[number,()=> void, ()=> void] => {

    const [value, setValue] = useState(initialState)

const add = () => {
    setValue((value) => value + 1)
}
const subtarct  =() => {
    setValue((value)=> value -1 )
}
        
return [value, add, subtarct]

}

export default useCount