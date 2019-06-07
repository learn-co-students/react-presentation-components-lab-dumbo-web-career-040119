// Code SimplerComponent Here
import React from 'react'

export default function SimplerComponent(props) {
    // const handleClick = () =>{
    //     console.log('yeah')
    // }
    return (
        <div onClick = {props.handleClick}>
            I am just happy
        </div>
    )
}
