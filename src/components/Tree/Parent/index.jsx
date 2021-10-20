import React from 'react'
import Child from '../Child'
export default function Parent() {
    const style = {
        border: '3px solid green',
        padding: '20px',
    }


    return (
        <div style={style}>
            <Child />
        </div>
    )
}
