/* eslint-disable newline-after-var */
import React from 'react';

const Heading = (props) => {
    let heading = props.type;
    let headingElem = null;

    if(heading) {
        heading = heading.toLowerCase();
    }

    switch(heading) {
        case "h1":
            headingElem = <h1 className={props.classes}>{props.children}</h1>;
            break;
        case "h2":
            headingElem = <h2 className={props.classes}>{props.children}</h2>;
            break;
        case "h3":
            headingElem = <h3 className={props.classes}>{props.children}</h3>;
            break;
        case "h4":
            headingElem = <h4 className={props.classes}>{props.children}</h4>;
            break;
        case "h5":
            headingElem = <h5 className={props.classes}>{props.children}</h5>;
            break;
        case "h6":
            headingElem = <h6 className={props.classes}>{props.children}</h6>;
            break;
    }

    return headingElem;
};
export default Heading;