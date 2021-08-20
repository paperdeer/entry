import React, { useEffect, useState } from 'react';
import './Header.scss';

function Header() {
    const [header,setHeader] = useState(70);
    useEffect(()=>{window.addEventListener('scroll',function(){
        const scroll = document.documentElement.scrollTop;
        console.log(scroll);
        if(scroll >= 200) setHeader(40);
        else setHeader(70);
    })},[]);
  return (
    <nav className="header" style={{
        height:`${header}px`,
    }}>
        <div className="header-logo"><img src="https://www.entrydsm.hs.kr/static/media/entry-headlogo.d3d1418d.svg" alt="" /></div>
        <div className="header-options">
            <ul className="screenMoveButton">
                <li>WHAT IS ENTRYDSM</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>MEMBER Q&A</li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;