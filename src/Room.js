import React, {useState} from 'react'

export const Room = ({roomName, iniState, iniTemp}) => {
    const [lit, setlit] = useState(iniState);
    const [temp, settemp] = useState(iniTemp)
    return (
        <div className = {lit?"room lit":"room dark"}>
            <h3>This is {roomName} and it is {lit?"Lit":"Dark"}</h3><br/>
            <button onClick = {
                ()=>{
                    setlit(!lit)
                }
            }>toggle lit</button><br/>
            <h3>Temprature : {temp}</h3><br/>

            
            <button onClick = {
                ()=>{
                    settemp(temp + 1)
                }
            }>+</button>


            <button onClick = {
                ()=>{
                    settemp(temp - 1)
                }
            }>-</button>
        </div>
    )
}
