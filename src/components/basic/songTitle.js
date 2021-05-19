import React from 'react';

const SongTitle = ({song}) => {

    return (
        <span className="song-title">
            <span className="slider color-changer"></span>
            <span className="song-title-text">{song.songName}</span>
        </span>
    );
};

export default SongTitle;