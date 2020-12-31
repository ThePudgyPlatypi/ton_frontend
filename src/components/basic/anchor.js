import React from 'react';

const Anchor = (props) => {
    // add in options at some point
    return <a href={props.href} className={props.classes}>{props.children}</a>;
};

export default Anchor;