import React, { useRef } from 'react';
import './MainPage.scss';
import Entry from '../../assets/Entry.png'
function MainPage(props) {
  const {refs} = props
  const MainRef = useRef(null);
  refs.mainRef = MainRef;
  return (
    <section className="MainPage" ref={MainRef}>
      <div className="img">
        <div className="divsInImg">
          <div className="schoolName">
            <span>대덕소프트웨어마이스터고등학교</span>
          </div>
          <div className="introduce">
            입학전형 시스템
            <img src={Entry} alt="Entry"/>
            입니다
          </div>
          <div className="submitBtn">
          <a href="">원서 접수하기</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;