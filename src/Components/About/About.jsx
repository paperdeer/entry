import React, { useRef } from 'react';
import './About.scss';

function About(props) {
    const {refs} = props;
    const AboutRef = useRef(null);
    refs.AboutRef = AboutRef;
  return (
    <div ref={AboutRef} style={{
        height: '1000px'
    }}>
        About
    </div>
  );
}

export default About;