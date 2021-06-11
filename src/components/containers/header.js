/* eslint-disable newline-after-var */
import React from 'react';
import Navigation from '../compound/navigation';
import Title from '../compound/title';
import FloatingControl from '../containers/floatingControl';
import SongList from '../compound/songList';

const HeaderContainer = ({songs, loading}) => {
    function handleScroll() {
        // add class to header once it scrolling
        // shrink the visualizer

        let documentOffset = document.documentElement.scrollTop;
        let header = document.getElementsByTagName('header')[0];

        // adding class to header
        if (documentOffset > 100) {
            header.classList.add("stuck");
        } else {
            header.classList.remove("stuck");
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return (
        <>
            <header className="site-header">
                <Title />
                <SongList songs={songs} isLoading={loading} />
                <Navigation /> 
            </header>
            <FloatingControl />
        </>
    );
};

export default HeaderContainer;