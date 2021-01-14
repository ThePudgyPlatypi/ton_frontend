import React from 'react';
import ContentContainer from '../components/containers/mainContent';
import Visualizer from '../components/compound/visualizer';

const Home = () => {
    return (
        <>
            <ContentContainer>
                <div className="player">
                    <p>The Music player will be here</p>
                </div>
                <div>
                    <Visualizer />
                </div>
            </ContentContainer>
        </>
    );
};

export default Home;