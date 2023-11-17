import React,{useEffect, useState} from 'react'

interface State {
    seconds:number
}

const StatefulComp: React.FC<{}> = props => {

    const [state, setState] = useState<State>({
        seconds:0
    })


const tick = () => {
    setState(() => {
        return {
            seconds:state.seconds+1
        }
    })

}

useEffect(()=> {
    let interval = setInterval(tick,1000)
    return () => clearInterval(interval)
}, [])

return (
    <h2>{state.seconds}</h2>
)

}
export default StatefulComp
