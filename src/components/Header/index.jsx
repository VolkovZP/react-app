import React from 'react'
import style from './Header.module.sass';
import NavItem from './NavItem/inde';

function Header() {
    return (
        <header className={style.header}>
            <nav className={style.navMenu}>
                <ul className={style.navList}>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/contacts'>Contacts</NavItem>
                    <NavItem to='/about'>about</NavItem>
                    <NavItem to='/timer'>timer</NavItem>
                    <NavItem to='/signform'>sign in</NavItem>
                    <NavItem to='/userloader'>user loader</NavItem>
                    <NavItem to='/phonesloader'>phone loader</NavItem>
                </ul>
            </nav>
        </header>
    )
}



export default Header