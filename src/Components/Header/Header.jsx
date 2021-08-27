import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.scss';
function Header() {
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
        <div className="header-logo"><a href=""><img src="https://www.entrydsm.hs.kr/static/media/entry-headlogo.d3d1418d.svg" alt="entry" /></a></div>
        <div className="header-options">
            <ul className="screenMoveButtons">
                <li><a className="screenMove" href="#MainPage"  id="main">WHAT IS ENTRYDSM</a></li>
                <li><a className="screenMove" href="#PortfolioPage"  id="portfolio">PORTFOLIO</a></li>
                <li><a className="screenMove" href="#AboutPage"  id="">ABOUT</a></li>
                <li><a className="screenMove" href="#TeamPage"  id="">TEAM</a></li>
                <li><a className="screenMove" href="#MemberQnAPage" id="">MEMBER Q&A</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;