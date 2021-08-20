import React from 'react';
import './MainPage.scss';
import Entry from '../../assets/Entry.png'
function MainPage() {
  return (
    <section className="MainPage">
      <div className="img">
        <div className="divsInImg">
          <div className="schoolName">
            <span>대덕소프트웨어마이스터고등학교</span>
          </div>
          <div className="introduce">
            입학전형 시스템
            <img src={Entry}/>
            입니다
          </div>
          <div>
          <button>원서 접수하기</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;