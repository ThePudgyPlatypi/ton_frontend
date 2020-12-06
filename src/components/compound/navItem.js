import React from 'react';
import Anchor from '../basic/anchor';

const NavItem = ({links}) => {
    console.log(links);
    return links.map((link, key) => 
        <li className="nav-item" key={key}>
            <Anchor href={link.url} classes="nav-item-link" >{link.Name}</Anchor>
        </li>
    );
};

export default NavItem;
