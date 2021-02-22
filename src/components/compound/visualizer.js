/* eslint-disable newline-after-var */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import AudioVisualizer from '../../utils/AudioVisualizer';


const Visualizer = ({element, source}) => {
    let AudioCtx = useRef();
    let audioElement = useRef();
    let visualizerElement = useRef();

    useEffect(() => {
        if(audioElement.current && visualizerElement.current) {
            AudioCtx.current = new AudioVisualizer(
                audioElement.current,
                visualizerElement.current,
                d3);
            AudioCtx.current.connect();
            AudioCtx.current.init();
        }
    }, [audioElement, visualizerElement]);

    function visualizeStart() {
        AudioCtx.current.startChart();
        AudioCtx.current.renderChart();
    }

    function visualizeStop() {
        AudioCtx.current.stopChart();
    }

    return (
        <>
            <audio 
                ref={audioElement}
                id={element}
                src={`${process.env.REACT_APP_BACKEND_URL}${source}`}
                autoPlay={false}
                onPlay={visualizeStart}
                onPause={visualizeStop}
                crossOrigin="anonymous">
            </audio>
            <div ref={visualizerElement} id="visualizer-container" ></div>
        </>
    );
};

export default Visualizer;