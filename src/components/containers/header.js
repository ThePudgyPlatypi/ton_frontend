import React from 'react';
import Navigation from '../compound/navigation';
import Title from '../compound/title';
import FloatingControl from '../containers/floatingControl';
import SongList from '../compound/songList';

const HeaderContainer = () => {
    return (
        <>
            <div className="site-header">
                <Title />
                <SongList />
                <div className="header-mplayer-container">Music Player</div>
                <Navigation /> 
            </div>
            <FloatingControl />
        </>
    );
};

export default HeaderContainer;