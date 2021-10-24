import React, { useState } from 'react';
import cx from 'classnames'
import Hamburger from 'hamburger-react'



export default function Closed({ isOpen, setOpen }) {

    return <Hamburger toggled={isOpen} toggle={setOpen} />
}
