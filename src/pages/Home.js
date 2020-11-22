import React from 'react';
import HeaderContainer from '../components/containers/header';
import ContentContainer from '../components/containers/mainContent';
import FooterContainer from '../components/containers/footer';

const Home = () => {
    return (
        <>
            <HeaderContainer />
            <ContentContainer>
                <div className="player">
                    <p>The Music player will be here</p>
                </div>
                <div>
                    <p>Visualizer Component here</p>
                </div>
            </ContentContainer>
            <FooterContainer />
        </>
    );
};

export default Home;