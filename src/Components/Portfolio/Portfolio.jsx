import React, { useRef } from 'react';
import './Portfolio.scss';
import EntryImg from '../../assets/EntryImg.png'
import QnAImg from '../../assets/QnAImg.png'
import AdminImg from '../../assets/AdminImg.png'
function Portfolio(props) {
    const {refs} = props;
    const PortfolioRef = useRef(null);
    refs.PortfolioRef = PortfolioRef;
  return (
    <div className="PortfolioPage" ref={PortfolioRef}  style={{
        height: '1000px'
    }}>
        <section className="Portfolio">
            <div className="PortfolioContainer">
                <div className="PortfolioTop">
                    <h2>PORTFOLIO</h2>
                    <h3>EntryDSM은 입학전형시스템을 비롯한 여러 시스템의 개발 • 유지보수를 진행하고 있습니다.</h3>
                </div>
                <div className="PortfolioBottom">
                    <div className="PortfolioBottomContents">
                        <div className="contentsClick"><img src={EntryImg} alt="modal" /></div>
                        <div className="contentsIfo">
                            <h4>입학전형시스템</h4>
                            <p>학생용 원서제출 페이지 개발</p>
                        </div>
                    </div>
                    <div className="PortfolioBottomContents">
                        <div className="contentsClick"><img src={AdminImg} alt="modal" /></div>
                        <div className="contentsIfo">
                            <h4>입학전형시스템</h4>
                            <p>전형 관리자 페이지 개발</p>
                        </div>
                    </div>
                    <div className="PortfolioBottomContents">
                        <div className="contentsClick"><img src={QnAImg} alt="modal" /></div>
                        <div className="contentsIfo">QnAImg
                            <h4>실시간 메신저</h4>
                            <p>학생-관리자 간 실시간 메신저 개발</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Portfolio;