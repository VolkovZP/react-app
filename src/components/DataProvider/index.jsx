import React, { useState, useEffect } from 'react'

export default function DataProvider(props) {
    const { render, dataLink } = props
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        load()
    }, [])

    const load = () => {
        fetch(dataLink)
            .then(res => res.json())
            .then(data => { setData(data) })
            .finally(() => setIsFetching(false))
    }


    return render({ data, isFetching })
}
