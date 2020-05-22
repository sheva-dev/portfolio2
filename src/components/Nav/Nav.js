import React, { useState, useEffect } from 'react';
import NavItem from '../NavItem/NavItem';
import './Nav.css'

const Nav = () => {
    // const [prevScrollposition, setPrevScrollposition] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    // const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setSrollPosition(position);
    // };



    useEffect(() => {
        const nav = document.getElementById('nav');;
        let lastScrollTop = 0;
        nav.addEventListener("scroll", () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            console.log(st);
            if (st > lastScrollTop) {
                nav.classList.remove('hide-nav');
            } else {
                nav.classList.add('hide-nav');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }, [lastScrollTop]);

    return (
        <nav id="nav">
            <ul>
                <NavItem name="Home" link="" />
                <NavItem name="About" link="" />
                <NavItem name="Contact" link="" />
            </ul>
        </nav>
    );
}

export default Nav;
