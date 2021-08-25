import React, { useRef } from 'react';
import './QnA.scss';

function QnA(props) {
    const {refs} = props;
    const QnARef = useRef(null);
    refs.QnARef = QnARef;
  return (
    <div ref={QnARef} className="QnAPage">
        <div className="MEMBERQnA">MEMBER Q&A</div>
    </div>
  );
}

export default QnA;