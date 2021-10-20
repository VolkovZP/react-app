import React from 'react'
import { UserContext } from '../../../contexts'

export default function Child() {
    const style = {
        border: '3px solid blue',
        padding: '20px',
    }

    return (
        <div style={style}>
            <UserContext.Consumer>
                {value => <div>Consumer : {value}</div>}
            </UserContext.Consumer>

        </div>
    )
}
