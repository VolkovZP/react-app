import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

export default function UserLoader() {
    const [user, setUser] = useState([]);
    const [isFething, setIsFetching] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(data => data.json())
            .then(d => setUser(d.results))
            .catch(error => setError(error))
            .finally(() => setIsFetching(false))
    }, [])

    if (isFething) return <div>LOADER....</div>
    if (error) return <div>EROR</div>
    return (
        <>
            <h1>USER LIST</h1>
            <ul>
                {user.map(item => <li key={item.login.uuid}>{JSON.stringify(item)}</li>)}
            </ul>
        </>
    )
}
