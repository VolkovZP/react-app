import React, { useContext } from 'react'
import { ThemeContaxt } from '../../contexts/'
import cx from 'classnames'
import constants from '../../constants'
import style from './Home.module.sass'

const Home = () => {
    const { THEMES: { LIGHT, DARK } } = constants
    const [theme, setTheme] = useContext(ThemeContaxt)

    const classes = cx(style.container, {
        [style.light]: theme === LIGHT,
        [style.dark]: theme === DARK
    })

    return (
        <div className={classes}>Home page</div>
    )
}

export default Home