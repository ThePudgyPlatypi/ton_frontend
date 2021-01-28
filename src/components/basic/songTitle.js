import React from 'react';
import Anchor from '../basic/anchor';

const SongTitle = ({title}) => {
    return (
        <Anchor href={""} classes="song-title" >
            <span>{title}</span>
        </Anchor>
    );
};

export default SongTitle;