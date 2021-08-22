import React, { useRef } from 'react';
import './Portfolio.scss';

function Portfolio(props) {
    const {refs} = props;
    const PortfolioRef = useRef(null);
    refs.PortfolioRef = PortfolioRef;
  return (
    <div ref={PortfolioRef}  style={{
        height: '1000px'
    }}>
        portfolio
    </div>
  );
}

export default Portfolio;