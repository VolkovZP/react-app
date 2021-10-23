import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react'
import { ThemeContaxt } from '../../contexts/'
import cx from 'classnames'
import constants from '../../constants'
import style from './Home.module.sass'

const Home = () => {
    const [value, setValue] = useState(1)
    const { THEMES: { LIGHT, DARK } } = constants
    const [theme, setTheme] = useContext(ThemeContaxt)

    const classes = cx(style.container, {
        [style.light]: theme === LIGHT,
        [style.dark]: theme === DARK
    })


    const preCount = useMemo(() => {
        let i = 0;
        for (let j = 0; j < 1000000000; j++) {
            i += j;
        }
        return i;
    }, []);
    const count = useCallback(value => preCount ** value, [value])
    const currentValue = useMemo(() => count(value), [value]);
    // console.log(preCount)

    return (
        <div className={classes}>
            <h1>Home page</h1>
            <div>value : {value}</div>
            <div>{currentValue}</div>
            <button onClick={() => setValue((prev => prev + 1))}>+</button>
        </div>
    )
}

export default Home