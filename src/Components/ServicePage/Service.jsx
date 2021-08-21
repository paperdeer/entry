import React from 'react';
import './Service.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt,faLock,faLaptop} from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
    <div className="ServicePage">
      <div className="serviceContainer">
        <div className="serviceIntroTop">
          <h2>WHAT IS ENTRYDSM</h2>
          <h3>EntryDSM은 대덕소프트웨어 마이스터고등학교 학생들의 자발적 참여로<br/>
            개발 및 유지보수가 이뤄지고 있는 <strong>입학전형시스템</strong>입니다.
          </h3>
        </div>
        <div className="serviceIntroBottom">
          <div className="serviceContents">
            <i><FontAwesomeIcon icon={faCalendarAlt}/></i>
            <h4 className="serviceContentstitle">입학전형 일정 안내</h4>
            <span className="serviceContentsInfo">입학전형시스템에 로그인 하시면<br/>학교 홈페이지에 접속할 필요 없이<br/>다가오는 일정을 손쉽게 확인하실 수 있습니다.</span>
          </div>
          <div className="serviceContents">
            <i><FontAwesomeIcon icon={faLock}/></i>
            <h4 className="serviceContentstitle">사용자 친화적 UI</h4>
            <span className="serviceContentsInfo">학생들의 의견을 수렴하여 구성된<br/>사용자 친화적 UI를 제공하므로 원서 제출 및<br/>전형료 납부를 쉽고 간편하게 진행할 수 있습니다.</span>
          </div>
          <div className="serviceContents">
            <i><FontAwesomeIcon icon={faLaptop}/></i>
            <h4 className="serviceContentstitle">강력한 보안</h4>
            <span className="serviceContentsInfo">해외 IP 차단, DDOS 대응 등 보안성 강화에<br/>총력을 다해 여러분께 안정적으로<br/>서비스를 제공할 수 있도록 노력하겠습니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;