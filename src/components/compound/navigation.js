import React, { useState, useEffect } from 'react';
// components
import NavItem from '../compound/navItem';
// helpers
import { getData } from '../../utils/getData';

const Navigation = () => {
    let [links, setLinks] = useState([]);
    
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let fetch = getData(`${process.env.REACT_APP_BACKEND_URL}/pages`, {}, setLinks);

        fetch.then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <ul className="navigation">
            {isLoading ? "loading" : <NavItem links={links} />}
        </ul>
    );
};

export default Navigation;
