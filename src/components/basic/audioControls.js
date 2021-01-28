import React from 'react';

const AudioControls = ({source, uniqueId}) => {
    function handlePlay() {
        document.getElementById(uniqueId).play();
    }

    function handlePause() {
        document.getElementById(uniqueId).pause();
    }

    return (
        <>
            <audio id={uniqueId} src={`${process.env.REACT_APP_BACKEND_URL}${source}`}></audio>
            <div>
                <button onClick={handlePlay}>Play the Audio</button>
                <button onClick={handlePause}>Pause the Audio</button>
            </div>
        </>
    );
};

export default AudioControls;