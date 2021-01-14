/* eslint-disable newline-after-var */
import React, { useState, useEffect } from 'react';
// helpers
import { getData } from '../../utils/getData';

const Visualizer = () => {
    let [music, setMusic] = useState([]);
    let [audioSrc, setAudioSrc] = useState('');
    let [isLoading, setIsLoading] = useState(true);

    function addAudioSource(res) {
        console.log(res);
        setAudioSrc(res[0].songAudioFile[0].url);
        setIsLoading(false);
    }

    useEffect(() => {
        getData(`${process.env.REACT_APP_BACKEND_URL}/songs`, {}, setMusic, addAudioSource);
    }, []);

    useEffect(() => {
        // https://www.bignerdranch.com/blog/music-visualization-with-d3-js/
        // let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // let analyser = audioCtx.createAnalyser();
        // let visualizer = document.getElementById('visualizer-container');
        // let audioFile = audioCtx.createMediaElementSource(visualizer);
    }, [isLoading]);

    return isLoading ? "loading..." : 
        <>
            <div id="visualizer-container">

            </div>
        </>;
    };

export default Visualizer;