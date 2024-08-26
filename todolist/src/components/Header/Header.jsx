import { useState } from 'react'
import './Header.css'
import logo from '/logo.svg'

const Header = () => {
    const now = new Date()
    return (
        <header>
            <img src={logo} alt="gigalogo" />
            <p>todolist by kxq</p>
            <span>today - {now.toLocaleDateString()}</span>
        </header>
        )
}

export default Header