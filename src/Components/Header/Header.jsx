import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.scss';
function Header(props) {
    const {onClickScreenMoveButton} = props;
    const [header,setHeader] = useState(102);
    useEffect(()=>{window.addEventListener('scroll',function(){
        const scroll = document.documentElement.scrollTop;
        console.log(scroll);
        if(scroll >= 180) setHeader(62);
        else setHeader(102);
    })},[])
  return (
    <nav className="header"  style={{
        height:`${header}px`,
    }}>
        <div className="header-logo"><img src="https://www.entrydsm.hs.kr/static/media/entry-headlogo.d3d1418d.svg" alt="" /></div>
        <div className="header-options">
            <ul className="screenMoveButtons">
                <li><button className="screenMoveButton" value="mainRef" onClick={onClickScreenMoveButton} id="main">WHAT IS ENTRYDSM</button></li>
                <li><button className="screenMoveButton" value="PortfolioRef" onClick={onClickScreenMoveButton} id="portfolio">PORTFOLIO</button></li>
                <li><button className="screenMoveButton" value="AboutRef" onClick={onClickScreenMoveButton} id="">ABOUT</button></li>
                <li><button className="screenMoveButton" value="TeamRef" onClick={onClickScreenMoveButton} id="">TEAM</button></li>
                <li><button className="screenMoveButton" value="QnARef" onClick={onClickScreenMoveButton} id="">MEMBER Q&A</button></li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;