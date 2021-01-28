import React from 'react';
import Anchor from '../basic/anchor';

const NavItem = ({links}) => {
    return links.map((link, key) => 
        <li className="nav-item" key={key}>
            <span className="slider color-changer"></span>
            <Anchor href={link.url} classes="nav-item-link" >
                <span>{link.Name}</span>
            </Anchor>
        </li>
    );
};

export default NavItem;
