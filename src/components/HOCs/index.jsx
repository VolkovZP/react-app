import React from 'react'
import style from './Header.module.sass';
import NavItem from './NavItem/inde';
import { ThemeContaxt } from '../../contexts/'
import cx from 'classnames'
import constants from '../../constants'



function WithTheme(ReturnedComponent) {
    const { THEMES: { LIGHT, DARK } } = constants
    return function ReturnedComponent(props) {
        return (
            <ThemeContaxt.Consumer>
                {([theme, setTheme]) => {
                    return <ReturnedComponent theme={theme} setTheme={setTheme} {...props} />
                }}
            </ThemeContaxt.Consumer>
        )
    }
}



export default Header