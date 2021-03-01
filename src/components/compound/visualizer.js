/* eslint-disable newline-after-var */
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import AudioVisualizer from '../../utils/AudioVisualizer';


const Visualizer = ({element, source}) => {
    let AudioCtx = useRef();
    let audioElement = useRef();
    let visualizerElement = useRef();
    let [windowHeight, setWindowHeight] = useState(window.innerHeight);
    let [visualizerWidth, setVisualizerWidth] = useState('');
    let [audioInitialized, setAudioInitialized] = useState(false);

    useEffect(() => {
        if(audioElement.current && visualizerElement.current) {
            AudioCtx.current = new AudioVisualizer(
                audioElement.current,
                visualizerElement.current,
                d3,
                windowHeight,
                visualizerElement.current.offsetWidth);
            AudioCtx.current.connect();
            AudioCtx.current.init();
        }

        setAudioInitialized(true);
    }, [audioElement, visualizerElement]);

    useEffect(() => {
        if(audioInitialized) {
            // attach resize event listener
            visualizerDimensionListener();
        }
    }, [audioInitialized]);

    useEffect(() => {
        if(AudioCtx.current && audioInitialized) {
            if(AudioCtx.current.svgHeight !== windowHeight) {
                AudioCtx.current.setSvgHeight(windowHeight);
            }
            
            if(AudioCtx.current.svgWidth !== visualizerWidth) {
                AudioCtx.current.setSvgWidth(visualizerWidth);
            }

            AudioCtx.current.updateChart();
        }
    }, [windowHeight, visualizerWidth]);

    function visualizeStart() {
        AudioCtx.current.startChart();
        AudioCtx.current.renderChart();
    }

    function visualizeStop() {
        AudioCtx.current.stopChart();
    }

    function visualizerDimensionListener() {
        window.addEventListener("resize", () => {
            // set width and height of visualizer
            setWindowHeight(window.innerHeight);
            setVisualizerWidth(visualizerElement.current.offsetWidth);
        });
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