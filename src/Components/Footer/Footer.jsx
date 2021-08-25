import React from 'react';
import './Footer.scss';
import SchoolLogo from '../../assets/DSMSchoolLogo.png'
function Footer() {
  return (
    <div className="Footer">
        <div className="footerContent">
            <div className="footetEntryImg"><img src="https://www.entrydsm.hs.kr/static/media/entry-headlogo.d3d1418d.svg" alt="entry" /></div>
            <div className="SchoolLogo"><img src={SchoolLogo} alt="" /></div>
            <div className="schoolCall">
            교무실 ☎: 042-866-8822 교무실 행정실 ☎: 042-866-8885<br/>
            대덕소프트웨어마이스터고등학교(34111) 대전광역시 유성구 가정북로 76(장동 23-9)
            </div>
        </div>
    </div>
  );
}

export default Footer;