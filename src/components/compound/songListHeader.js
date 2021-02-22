/* eslint-disable newline-after-var */
import React, {useEffect, useState} from 'react';
import Heading from '../basic/heading';

const SongListHeader = () => {
    let [header, setHeader] = useState({data: [], loading: true});

    function randomTitle(array) {
        let length = array.length;
        return Math.floor(Math.random() * length);
    }

    useEffect(() => {
        let response = async () => {
            let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/random-song-headers`, {
                method: 'GET',
            }).then(res => res.json());
            
            setHeader({data: result, loading: false});
        };

        response();
    }, []);

    return (
        <div className="song-list-header">
            <Heading type="h3">{ 
                header.loading && !header.data.length ? 
                    "Loading...": 
                    header.data[randomTitle(header.data)].header
                }
            </Heading>
        </div>
    ); 
};

export default SongListHeader;