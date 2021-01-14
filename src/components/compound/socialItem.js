import React from 'react';
import Anchor from '../basic/anchor';

const SocialItem = ({links}) => {
    return links.map((value, key) => {
        let url = value.Icon.formats ? value.Icon.formats.thumbnail.url : value.Icon.url;

        return (
                <li key={key} className="social-item color-changer">
                    <Anchor href={value.Link} classes="social-link-url">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}${url}`} 
                            alt={value.Icon.alternativeText} />
                    </Anchor>
                </li>
            );
        }
    );
};

export default SocialItem;