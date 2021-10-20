import React from 'react'
import style from './Header.module.sass';
import NavItem from './NavItem/inde';
import { ThemeContaxt } from '../../contexts/'
import cx from 'classnames'
import constants from '../../constants'
function Header() {
    const { THEMES: { LIGHT, DARK } } = constants
    return (
        <ThemeContaxt.Consumer>
            {([theme, setTheme]) => {
                return (
                    <header className={cx(style.header, {
                        [style.lightTheme]: theme === LIGHT,
                        [style.darkTheme]: theme === DARK,
                    })}>
                        <input type="checkbox" onChange={({ target }) => {
                            console.log(target.checked)
                            target.checked ? setTheme(DARK) : setTheme(LIGHT)
                        }} />
                        <nav className={style.navMenu}>
                            <ul className={style.navList}>
                                <NavItem to='/'>Home</NavItem>
                                <NavItem to='/contacts'>Contacts</NavItem>
                                <NavItem to='/about'>about</NavItem>
                                <NavItem to='/timer'>timer</NavItem>
                                <NavItem to='/signform'>sign in</NavItem>
                            </ul>
                        </nav>
                    </header>
                )
            }}
        </ThemeContaxt.Consumer>
    )
}



export default Header