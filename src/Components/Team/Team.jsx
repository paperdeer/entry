import React, { useRef } from 'react';
import './Team.scss';

function Team(props) {
    const {refs} = props;
    const TeamRef = useRef(null);
    refs.TeamRef = TeamRef;
  return (
    <div ref={TeamRef} style={{
        height: '1000px'
    }}>
        Team
    </div>
  );
}

export default Team;