import React, { useRef } from 'react';
import './About.scss';
import img2016 from '../../assets/2016.jpg'
import img2017 from '../../assets/2017.jpg'
import img2018 from '../../assets/2018.jpg'
import img2019 from '../../assets/2019.jpg'
import img2020 from '../../assets/2020.jpg'
function About() {
  return (
    <div id="AboutPage" className="aboutPage">
        <section className="aboutTop">
            <p className="about">ABOUT</p>
            <p className="aboutEntry">약 5년 간 서비스를 제공해온 노하우를 바탕으로</p>
            <p className="aboutEntry marginbottom100">EntryDSM은 지속적인 성장을 이뤄내고 있습니다.</p>
        </section>
        <section className="entryLoadMap">
            <div className="entryLoadMapContainer">
                <div className="steps">
                    <div className="firstStep left stepMarginLeft">
                        <div className="introduceEachStep introduceleft">
                            <div className="aboutEachYear">2016</div>
                            <div className="aboutEachTitle">새로운 시작</div>
                            <div className="aboutEachContent">초대 교장선생님이신 최부영 선생님의 권유로 시작된 EntryDSM은 2016년 v1을 출시하여 학생들이 프로덕션 환경의 시스템을 구현하고 운영하는 데 있어 전반적인 기반을 다졌습니다.</div>
                        </div>
                        <div className="imgEachStep">
                            <img src={img2016} alt="img2016" />
                        </div>
                        <div className="emptyContainer"></div>
                    </div>
                    <div className="downArrow">▼</div>


                    <div className="secondStep right stepMarginLeft stepMarignTopBottom">
                        <div className="emptyContainer"></div>
                        <div className="imgEachStep">
                            <img src={img2017} alt="img2017" />
                        </div>
                        <div className="introduceEachStep">
                            <div className="aboutEachYear">2017</div>
                            <div className="aboutEachTitle">두 번째 이야기</div>
                            <div className="aboutEachContent">v1에서 수많은 학생과 교사분들께 받았던 피드백을 바탕으로 서비스 품질을 개선하기 위해 매진하였고, 이에 아키텍처 설계를 고려하는 등 안정적인 시스템을 구현할 수 있도록 노력했습니다.</div>
                        </div>
                    </div>
                    <div className="downArrow">▼</div>
                    
                    
                    <div className="thirdStep left stepMarginLeft stepMarignTopBottom">
                        <div className="introduceEachStep introduceleft">
                            <div className="aboutEachYear">2018</div>
                            <div className="aboutEachTitle">세 번째 이야기</div>
                            <div className="aboutEachContent">현업에서 자주 이용되는 기술 스택을 기반으로 시스템을 구성하여 사용자 UI, 원서 출력 기능 등 다양한 기능들을 안정적 이용과 성능 향상에 주력하여 시스템의 완성도를 높였습니다.</div>
                        </div>
                        <div className="imgEachStep">
                            <img src={img2018} alt="img2018" />
                        </div>
                        <div className="emptyContainer"></div>
                    </div>
                    <div className="downArrow">▼</div>


                    <div className="4thStep right stepMarginLeft stepMarignTopBottom">
                        <div className="emptyContainer "></div>
                        <div className="imgEachStep">
                            <img src={img2019} alt="img2019" />
                        </div>
                        <div className="introduceEachStep introduceright">
                            <div className="aboutEachYear">2019</div>
                            <div className="aboutEachTitle">네 번째 이야기</div>
                            <div className="aboutEachContent">v3 시스템의 성능 한계를 극복하기 위해 비동기 프로그래밍을 적용하였고, 실시간 시스템 모니터링 및 배포 파이프라인 구성으로 구성원의 작업 환경을 개선했습니다.</div>
                        </div>
                    </div>
                    <div className="downArrow">▼</div>

                    
                    <div className="5thStep stepMarginLeft stepMarignTopBottom">
                        <div className="introduceEachStep  introduceleft" style={{
                            display: 'flex',
                            flexDirection:'column',
                            justifyContent:'flex-end',
                            marginBottom:'1px'
                        }}>
                            <div className="aboutEachYear">2020</div>
                            <div className="aboutEachTitle">다섯 번째 이야기</div>
                            <div className="aboutEachContent thisYear">오랜 기간 서비스를 개발 • 운영해온 경험을 살려 올해도 안정적으로 입학 전형 시스템을 제공합니다.</div>
                        
                        </div>
                        <div className="imgEachStep">
                            <img src={img2020} alt="img2020" />
                        </div>
                        <div className="emptyContainer"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;