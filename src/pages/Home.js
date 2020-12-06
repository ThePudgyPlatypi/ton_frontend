import React from 'react';
import ContentContainer from '../components/containers/mainContent';


const Home = () => {
    return (
        <>
            <ContentContainer>
                <div className="player">
                    <p>The Music player will be here</p>
                </div>
                <div>
                    <p>Visualizer Component here</p>
                </div>
            </ContentContainer>
        </>
    );
};

export default Home;