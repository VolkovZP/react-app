import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavItem.module.sass';
import cx from 'classnames';
function NavItem ({ className, activeClassName, children, ...other }) {
  return (
    <li className={style.listItem}>
      <NavLink
        exact
        className={cx(style.navLink, className)}
        activeClassName={cx(style.navLinkActive, activeClassName)}
        {...other}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
