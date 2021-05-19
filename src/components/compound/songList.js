/* eslint-disable newline-after-var */
import React, {useEffect, useState} from 'react';
import SongTitleHeader from '../compound/songListHeader';
import Visualizer from '../compound/visualizer';
import AudioClickHandler from '../compound/audioClickHandler';

const SongList = () => {
    let [music, setMusic] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [src, setSrc] = useState("");
    let [audioElement, setAudioElement] = useState("media-element");
    let [background, setBackground] = useState('');

    useEffect(() => {
        let response = async () => {
            let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/songs`, {
                method: 'GET',
            }).then(res => res.json())
            .then(setIsLoading(false));    
            setMusic(result);
        };

        response();
    }, []);

    useEffect(() => {
        if(music[0]) {
            // set default song
            setSrc(music[0].songAudioFile[0].url);
            setBackground(music[0].trackArt.url);
        }
    }, [music]);

    return isLoading ? "Loading..." : 
        <>
            <div className="song-list-container">
                <SongTitleHeader />
                <ul className="song-list">
                    {music.map((song, key) => {
                        return (
                            <li key={key} className="song-list-item">
                                <AudioClickHandler 
                                    id={audioElement}
                                    song={song}
                                    setSrc={setSrc}
                                    setBackground={setBackground}
                                />
                            </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="song-visualizer-container color-changer" 
                style={background ? {
                        backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}${background})`
                    } : {} }>
                <Visualizer element={audioElement} source={src} />
            </div>
        </>; 
};

export default SongList;