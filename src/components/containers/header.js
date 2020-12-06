import React from 'react';
import Navigation from '../compound/navigation';
import Heading from '../basic/heading';

const HeaderContainer = () => {
    return (
        <div className="grid-x">
            <div className="cell small-4">
                {/* placeholder for title */}
                <Heading classes="header" type="h1">
                    Theory of Noise
                </Heading>
            </div>
            <div className="cell small-4">
                {/* placeholder for folded music player */}
            </div>
            <div className="cell small-4">
                <Navigation />
            </div>  
        </div>
    );
};

export default HeaderContainer;