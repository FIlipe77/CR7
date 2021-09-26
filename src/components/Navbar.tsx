import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button, CountDown } from './';

import './navbar.css';

/* HELP https://levelup.gitconnected.com/using-react-functional-components-with-hooks-in-typescript-6d61075edddc */

export const Navbar: React.FC = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        CR7 <img src="images/cr7_logo.png" alt="cr7_logo" className="cr7_logo"/>
                    </Link>
                    {/* <div className="menu-icon" onClick={() => setClick(!click)}> */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Biography' className='nav-links'
                                onClick={closeMobileMenu}>
                                Biography
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Products' className='nav-links'
                                onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/SignUp' className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <CountDown className='nav-links'/>
                        </li>
                    </ul>
                    {button && <Button buttonSize='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

