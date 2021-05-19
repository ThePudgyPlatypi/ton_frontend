import React from 'react';
import Paragraph from '../basic/paragraph';
import Heading from '../basic/heading';

const AboutText = (text) => {
    return <div className="about-text">
            <Heading type="h2">{text.text.title}</Heading>
            <Paragraph>{text.text.content}</Paragraph>
        </div>;
};

export default AboutText;