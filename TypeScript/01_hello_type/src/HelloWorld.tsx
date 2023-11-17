import React from "react";

interface Props {
    name?:string
}

const HelloWorld:React.FC<Props> = (props:Props) => {

    let name: string ="WÖRLD"
    if(props.name){
        name=props.name
    }


 


    return (
        <h2>Hello {name} </h2>
    )

}

export default HelloWorld