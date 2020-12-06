import React from 'react';

const Anchor = (props) => {
    let url = `${props.href}`;

    return <a href={url} className={props.classes}>{props.children}</a>;
};

export default Anchor;