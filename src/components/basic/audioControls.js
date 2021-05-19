import React from 'react';

const AudioControls = () => {
    return (
        <>
            <div className="audio-controls-container">
                <svg className="equalizer-svg" id="equalizer-svg" viewBox="0 0 100 100">
                    <rect width="20" height="100%" rx="20" />
                    <rect width="20" height="100%" rx="20" x="35" />
                    <rect width="20" height="100%" rx="20" x="70" />
                </svg>

                <svg className="play-svg" id="play-svg" viewBox="0 0 100 100">
                    <g id="layer1" transform="translate(-75,-45)">
                        <path
                            id="path10"
                            d="m 121.67189,96.437126 -41.978074,24.236054 -41.978072,24.23605 0,-48.472105 0,-48.472102 41.978074,24.236052 z"
                        />
                    </g>
                </svg>

                {/* <svg className="pause-svg" id="pause-svg" viewBox="0 0 100 100">
                    <g id="layer1" transform="translate(-40,0)">
                        <rect width="20" height="100%" rx="20" />
                        <rect width="20" height="100%" rx="20" x="40" />
                    </g>
                </svg> */}
            </div>
        </>
    );
    };

export default AudioControls;