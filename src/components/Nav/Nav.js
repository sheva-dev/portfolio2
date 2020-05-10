import React, { useState, useEffect } from 'react';
import NavItem from '../NavItem/NavItem';
import './Nav.css'

const Nav = () => {
    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollPosition);
    return (
        <div>
            <nav>
                <ul>
                    <NavItem name="Home" link="" />
                    <NavItem name="About" link="" />
                    <NavItem name="Contact" link="" />
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
