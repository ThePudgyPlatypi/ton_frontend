import React, {useState, useEffect} from 'react';
import Heading from '../basic/heading';
import Modal from './modal';

const SongTile = ({song}) => {
    return (
        <div className="song-tile-cell">
            <div className="song-tile-container">
                <div className="song-tile-section">
                    <img className="song-tile-img" src={song.trackArt.formats.small.url ? 
                        `${process.env.REACT_APP_BACKEND_URL}${song.trackArt.formats.small.url}` :
                        ""} 
                        alt={song.alternativeText ? song.alternativeText : "song track art"} />
                </div>
                <div className="song-tile-section">
                    <Heading type="h3" classes={"song-tile-title text-color-changer"}>
                        {song.songName ? song.songName : ""}
                    </Heading>
                    <p className="song-tile-release text-color-changer">{song.release ? song.release : ""}</p>
                    <Modal title={"lyrics"} />
                    <Modal title={"about"} />
                </div>
            </div>
        </div>
    );
};

export default SongTile;