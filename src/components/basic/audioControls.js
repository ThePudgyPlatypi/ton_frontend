import React from 'react';

const AudioControls = ({id}) => {
    function handlePlay() {
        document.getElementById(id).play();
    }

    function handlePause() {
        document.getElementById(id).pause();
    }

    return (
        <>
            <div className="audio-controls-container">
                <button onClick={handlePlay}>Play the Audio</button>
                <button onClick={handlePause}>Pause the Audio</button>
            </div>
        </>
    );
    };

export default AudioControls;