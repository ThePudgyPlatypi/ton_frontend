import React from 'react';
import SocialLinks from '../compound/socialLinks';
import ColorPicker from '../compound/colorPicker';

const FloatingControl = () => {
    return <div className="floating-control">
            <ColorPicker />
            <SocialLinks />
        </div>;
};

export default FloatingControl;