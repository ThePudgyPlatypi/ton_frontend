/* eslint-disable newline-after-var */
import React, { useEffect, useState } from 'react';
import Heading from '../basic/heading';
import SongTile from '../compound/songTile';

const Discography = ({songs, loading}) => {
    let [music, setMusic] = useState(songs);
    let [isLoading, setIsLoading] = useState(loading);
    
    // listen for parent prop change
    useEffect(() => {
        setIsLoading(loading);
        setMusic(songs);
    }, [loading, songs]);

    return (
        <div className="discography-container">
            <div className="disc-header-container">
                <Heading type="h2" classes={"text-color-changer"}>Discography</Heading>
                <div className="disc-sorter-container">

                </div>
            </div>
            <div className="disc-body-container">
                {isLoading ? "Loading..." : music.map((song, key) => <SongTile song={song} key={key} />)}
            </div>
        </div>
        
    );
};

export default Discography;