/* eslint-disable newline-after-var */
import React from 'react';
import SongTitle from '../basic/songTitle';
import AudioControls from '../basic/audioControls';

const AudioClickHandler = ({id, song, setSrc, setBackground}) => {
    function handlePlay(event) {
        let player = document.getElementById(id);
        let element = event.currentTarget;
        let songs = document.querySelectorAll('.song-control-wrapper');

        // set src and background image
        setSrc(song.songAudioFile[0].url);
        setBackground(song.trackArt.url);

        songs.forEach((songElement) => {
            if (songElement !== element && songElement.classList.contains('playing')) {
                // clear playing from song not currently clicked on
                songElement.classList.toggle('playing');
            }
        });
        
        if (!element.classList.contains('playing')) {
            play(player);
        } else {
            player.pause();
        }

        element.classList.toggle('playing');
    }

    async function play(player) {
        await player.load();
        player.play();
    }

    return (
        <div className="song-control-wrapper" onClick={(event) => handlePlay(event)}>
            <AudioControls/>
            <SongTitle song={song}/>
        </div>
    );
};

export default AudioClickHandler;