import React from 'react';
import Anchor from '../basic/anchor';

const SongTitle = ({song, setSrc, setBackground}) => {

    function loadSong(url, image, e) {
        console.log(image);
        setSrc(url);
        setBackground(image);
    }

    return (
        <span classes="song-title" onClick={(e) => loadSong(song.songAudioFile[0].url, song.trackArt.url, e)}>
            <span>{song.songName}</span>
        </span>
    );
};

export default SongTitle;