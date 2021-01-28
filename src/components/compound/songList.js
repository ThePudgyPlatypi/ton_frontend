/* eslint-disable newline-after-var */
import React, {useEffect, useState} from 'react';
import SongTitle from '../basic/songTitle';
import AudioControls from '../basic/audioControls';

const SongList = () => {
    let [music, setMusic] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

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

    return isLoading ? "Loading..." : 
        <div className="song-list-container">
             <ul className="song-list">
                {music.map((song, key) => {
                    return (
                        <li key={key} className="song-list-item">
                            <AudioControls 
                                uniqueId={song.id} 
                                source={song.songAudioFile[0] ? song.songAudioFile[0].url : "waiting"}/>
                            <SongTitle title={song.songName} />
                        </li>
                        );
                    })
                }
            </ul>
        </div>; 
};

export default SongList;