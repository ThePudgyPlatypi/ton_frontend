import React from 'react';
import Anchor from '../basic/anchor';

const SocialItem = ({links}) => {
    return links.map((value, key) =>
        <li key={key} className="social-item">
            <Anchor href={value.Link} classes="social-link-url">
                <img href={`${process.env.REACT_APP_BACKEND_URL}${value.Icon.formats.thumbnail.url}`} 
                    alt={value.Icon.alternativeText} />
            </Anchor>
        </li>
    );
};

export default SocialItem;