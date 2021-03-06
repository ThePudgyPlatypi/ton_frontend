import React from 'react';
import Heading from '../basic/heading';
import Anchor from '../basic/anchor';

const Title = () => {
    return (
        <div className="header-heading-container">
            <Anchor href="/" classes="site-heading-link" >
                <Heading classes="site-heading" type="h1">
                    <span>Theory</span>
                    <span>of</span>
                    <span>Noise</span>
                </Heading>
                <div className="stuck-site-heading">
                    <span className="letters">TON</span>
                </div>
            </Anchor>
        </div>
    );   
};

export default Title;