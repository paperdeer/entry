import React, { useRef } from 'react';
import './QnA.scss';

function QnA(props) {
    const {refs} = props;
    const QnARef = useRef(null);
    refs.QnARef = QnARef;
  return (
    <div ref={QnARef} style={{
        height: '1000px'
    }}>
        QnA
    </div>
  );
}

export default QnA;