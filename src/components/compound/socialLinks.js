import React, { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import SocialItem from '../compound/socialItem';

const SocialLinks = () => {
    let [links, setLinks] = useState([]);
    
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let fetch = getData(`${process.env.REACT_APP_BACKEND_URL}/social-media-links`, {}, setLinks);

        fetch.then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="social-links-container">
            <ul className="social-item-list">
                {isLoading ? "loading" : <SocialItem links={links} />}
            </ul>
        </div>
    );
};

export default SocialLinks;