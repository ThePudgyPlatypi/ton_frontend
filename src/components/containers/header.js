import React from 'react';
import Navigation from '../compound/navigation';
import Title from '../compound/title';
import FloatingControl from '../containers/floatingControl';

const HeaderContainer = () => {
    return (
        <>
            <div className="site-header">
                <Title />
                {/* placeholder for folded music player */}
                <div className="header-mplayer-container">Music Player</div>
                <Navigation /> 
            </div>
            <FloatingControl />
        </>
    );
};

export default HeaderContainer;