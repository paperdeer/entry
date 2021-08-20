import React from 'react';
import './MainPage.scss';
import {MainPageLogo} from '../../assets/MainPageEntryLogo.png'
function MainPage() {
  return (
    <section className="MainPage">
      <div className="img">
        <div className="divsInImg">
          <div className="schoolName">
            <span>대덕소프트웨어마이스터고등학교</span>
          </div>
          <div className="introduce">
            <span>입학전형 시스템</span>
            <img src={MainPageLogo}/>
            <span>입니다</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;