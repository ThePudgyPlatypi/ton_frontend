/* eslint-disable newline-after-var */
import React, {useEffect, useState} from 'react';
import AboutText from '../compound/aboutText';

const About = () => {
    let [about, setAbout] = useState({background: {url: ''}});
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let response = async () => {
            let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/home-about-content`, {
                method: 'GET',
            }).then(
                res => res.json()
            ).then(setIsLoading(false));   

            setAbout(result);
        };

        response();
    }, []);

    return isLoading ? "Loading..." : 
        <div
            className="about-container" 
            style={{backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}${about.background.url})`}}>
            <AboutText text={about}/>
        </div>;
           
};

export default About;