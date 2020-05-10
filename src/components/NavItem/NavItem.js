import React from 'react'

const NavItem = (props) => {
    return (
        <li>
            <a href={props.link}> {props.name} </a>
        </li>
    );
}

export default NavItem;
