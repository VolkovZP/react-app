import React from 'react'
import style from './Header.module.sass';
import NavItem from './NavItem/inde';
import { ThemeContaxt } from '../../contexts/'
import cx from 'classnames'
import constants from '../../constants'
import Button from '../Button'
import { WbSunny, Brightness3 } from '@mui/icons-material'
function Header() {

    const { THEMES: { LIGHT, DARK } } = constants
    return (
        <ThemeContaxt.Consumer>
            {([theme, setTheme]) => {
                const toogleMode = () => {
                    setTheme(theme === LIGHT ? DARK : LIGHT)
                }
                return (
                    <header className={cx(style.header, {
                        [style.lightTheme]: theme === LIGHT,
                        [style.darkTheme]: theme === DARK,
                    })}>
                        <nav className={style.navMenu}>
                            <ul className={style.navList}>
                                <NavItem to='/'>Home</NavItem>
                                <NavItem to='/contacts'>Contacts</NavItem>
                                <NavItem to='/about'>about</NavItem>
                                <NavItem to='/timer'>timer</NavItem>
                                <NavItem to='/signform'>sign in</NavItem>
                            </ul>
                        </nav>
                        <Button onClick={toogleMode} >
                            {theme === LIGHT ? <WbSunny style={{ color: 'orange' }} /> : <Brightness3 />}
                        </Button>
                    </header>
                )
            }}
        </ThemeContaxt.Consumer>
    )
}



export default Header