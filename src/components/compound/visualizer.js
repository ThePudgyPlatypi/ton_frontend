/* eslint-disable newline-after-var */
import React, { useState, useEffect } from 'react';


const Visualizer = () => {
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // https://www.bignerdranch.com/blog/music-visualization-with-d3-js/
        // let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // let analyser = audioCtx.createAnalyser();
        // let visualizer = document.getElementById('visualizer-container');
        // let audioFile = audioCtx.createMediaElementSource(visualizer);
    }, [isLoading]);

    return (
        <>
            <div id="visualizer-container">

            </div>
        </>
    );
};

export default Visualizer;