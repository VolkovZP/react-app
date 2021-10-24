import React, { useEffect, useRef, useState } from 'react';
import Closed from './Closed';
import style from './NavMenu.module.sass';
import NavItem from '../Header/NavItem/'




export default function NavMenu() {
    const navFef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    console.log(navFef);

    useEffect(() => {
        const handleClick = ({ target }) => {
            if (isOpen && !navFef.current.contains(target)) {
                setOpen(false);
            }
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        }
    }, [isOpen])


    return (
        <nav className={style.navMenu} ref={navFef}>
            <Closed isOpen={isOpen} setOpen={setOpen} />
            {isOpen && <ul className={style.list}>
                <NavItem to='/'>Home</NavItem>
                <NavItem to='/contacts'>Contacts</NavItem>
                <NavItem to='/about'>about</NavItem>
                <NavItem to='/timer'>timer</NavItem>
                <NavItem to='/signform'>sign in</NavItem>
            </ul>}

        </nav>
    );
}
