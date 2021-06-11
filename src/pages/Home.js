import React from 'react';
import ContentContainer from '../components/containers/mainContent';
import About from '../components/containers/about';
import Discography from '../components/containers/discography';

const Home = ({songs, loading}) => {
    return (
        <>
            <ContentContainer page="homepage">
                <About />
                <Discography songs={songs} loading={loading}/>
            </ContentContainer>
        </>
    );
};

export default Home;