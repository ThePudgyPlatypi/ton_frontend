import React from 'react';

const ContentContainer = (props) => {
    return (
        <div className={`main-content container ${props.page}`}>
            {props.children}
        </div>
    );
};

export default ContentContainer;