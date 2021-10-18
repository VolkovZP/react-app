import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'

export default function WindowSizes() {
    // window.innerWidth
    // window.innerHeight
    const [w, setW] = useState(0)
    const [h, setH] = useState(0)


    const replaceWandH = () => {
        setW(window.innerWidth)
        setH(window.innerHeight)
    }

    useEffect(() => {
        replaceWandH()
    }, [])


    useEffect(() => {
        replaceWandH()
    }, [w, h])

    window.addEventListener('resize', replaceWandH)
    return (
        <div>
            height : {h} width : {w}
        </div>
    )
}
