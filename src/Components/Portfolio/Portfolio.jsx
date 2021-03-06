import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.scss';
import EntryImg from '../../assets/EntryImg.png'
import QnAImg from '../../assets/QnAImg.png'
import AdminImg from '../../assets/AdminImg.png'
function Portfolio(props) {
    const {setModal,modal} = props;
    const firstObj = {
        status : true,
        title : '입학전형시스템',
        developType : '학생용 원서제출 페이지 개발',
        img : EntryImg,
        subInfo : '원서제출을 위한 개인정보 기입하고 자동으로 성적을 산출하여 원서를 발급 • 출력할 수 있는 메인 페이지입니다.',
        developTeam : '입학전형시스템 메인플랫폼개발팀',
        developers : {
            front : '오준상 이우찬',
            back : '김재훈 황신우 임용성'
        }
    }
    const secondObj = {
        status : true,
        title : '입학전형시스템',
        developType : '전형 관리자 페이지 개발',
        img : AdminImg,
        subInfo : '지원자들의 원서 제출 현황을 관리하고, 쾌적한 시스템 운영을 제공하는 관리자 대시보드입니다.',
        developTeam : '입학전형시스템 메인플랫폼개발팀',
        developers : {
            front : '장소희',
            back : '신은주 정우영'
        }
    }
    const thirdObj = {
        status : true,
        title : '실시간 메신저',
        developType : '학생-관리자 간 실시간 메신저 개발',
        img : QnAImg,
        subInfo : '지원자와 관리자가 실시간으로 소통할 수 있는 메신저 플러그인입니다.',
        developTeam : '입학전형시스템 메인플랫폼개발팀',
        developers : {
            front : '김준우',
            back : '김대웅'
        }
    }
    const onClickModalImg = (e) => {
        console.log("onClicked")
        const value = e.target.value;
        const plus = e.target.className;
        console.log(plus);
        if(value === '0' || plus === 'plus' ) setModal(firstObj);
        else if(value === '1' || plus === 'plus' ) setModal(secondObj);
        else if(value === '2' || plus === 'plus' ) setModal(thirdObj);
    }
    const onClickCloseModal = () => {
        setModal({status : false,
            title : '',
            developType : '',
            img : '',
            subInfo : '',
            developTeam : '',
            developers : {
                front : '',
                back : ''
            }
        });
    }
  return (
    <div className="PortfolioPage" id="PortfolioPage">
        <section className={modal.status ? "modalDIv" : "modalNone"}>
            <div className="modal">
                <div className="modalContent">
                    <div className="modalBody">
                        <div className="modalContainer">
                            <div className="modalTop">
                                <h2>{modal.title}</h2>
                                <p className="developType">{modal.developType}</p>
                                <img src={modal.img} alt="img" />
                                <p className="subInfo">{modal.subInfo}</p>
                                <ul>
                                    <li><h5>{modal.developTeam}</h5><br/></li>
                                    <li>웹 프론트엔드 개발: {modal.developers.front}</li>
                                    <li>백엔드 개발: {modal.developers.back}</li>
                                </ul>
                                <button onClick={onClickCloseModal}>프로젝트 닫기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="Portfolio">
            <div className="PortfolioContainer">
                <div className="PortfolioTop">
                    <h2>PORTFOLIO</h2>
                    <h3>EntryDSM은 입학전형시스템을 비롯한 여러 시스템의 개발 • 유지보수를 진행하고 있습니다.</h3>
                </div>
                <div className="PortfolioBottom">
                    <div className="PortfolioBottomContents">
                        <div className="contentsClick">
                            <img className="modalmainImg" src={EntryImg} alt="modal" />
                            <button className="hoverPlus" onClick={onClickModalImg} value='0'><img className="plus" src="https://www.entrydsm.hs.kr/static/media/plus.9024901d.svg" alt="" /></button>
                        </div>
                        <div className="contentsIfo">
                            <h4>입학전형시스템</h4>
                            <p>학생용 원서제출 페이지 개발</p>
                        </div>
                    </div>
                    <div className="PortfolioBottomContents">
                        <div  className="contentsClick">
                            <img className="modalmainImg" src={AdminImg} alt="modal" />
                            <button  onClick={onClickModalImg} value="1" className="hoverPlus"><img className="plus" src="https://www.entrydsm.hs.kr/static/media/plus.9024901d.svg" alt="" /></button>    
                        </div>
                        <div className="contentsIfo">
                            <h4>입학전형시스템</h4>
                            <p>전형 관리자 페이지 개발</p>
                        </div>
                    </div>
                    <div className="PortfolioBottomContents">
                        <div  className="contentsClick">
                            <img className="modalmainImg" src={QnAImg} alt="modal" />
                            <button onClick={onClickModalImg} value="2" className="hoverPlus"><img className="plus" src="https://www.entrydsm.hs.kr/static/media/plus.9024901d.svg" alt="" /></button>
                        </div>
                        <div className="contentsIfo">
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