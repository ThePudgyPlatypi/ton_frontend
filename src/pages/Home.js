import React from 'react';
import ContentContainer from '../components/containers/mainContent';
import About from '../components/containers/about';

const Home = () => {
    return (
        <>
            <ContentContainer page="homepage">
                <About />
            </ContentContainer>
        </>
    );
};

export default Home;