import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import './App.css'
import Service from "./Components/ServicePage/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import QnA from "./Components/QnA/QnA";
import Footer from "./Components/Footer/Footer";
import Slide from "./Components/Slide/Slide";
import Female from './assets/Female.png';
import JWY from './assets/JWY.jpg';
import KHG from './assets/KHG.jpg';
import KJH from './assets/kjh.jpg';
import KJW from './assets/kjw.png';
import LYS from './assets/lys.jpg';
import Male from './assets/Male.png';
import SWJ from './assets/swj.jpg';
import LWC from './assets/LWC.jpg';
import { useEffect, useRef, useState } from "react";
function App() {
  const memberArr = [
    {
        name : '김준우',
        img : KJW,
        develop : 'FRONT - END',
        github : 'https://github.com/junu126',
        grade : '3'
    },
    {
        name : '김재훈',
        img : KJH,
        develop : 'BACK - END, DEVOPS',
        github : 'https://github.com/LumpKim',
        grade : '3'
    },
    {
        name : '김해건',
        img : KHG,
        develop : 'UX/UI DESIGNER',
        github : '',
        grade : '3'
    },
    {
        name : '신은주',
        img : SWJ,
        develop : 'BACK - END',
        github : 'https://github.com/Gaegul'
        ,grade : '3'
    },
    {
        name : '장소희',
        img : Female,
        develop : 'FRONT - END',
        github : 'https://github.com/soheejang15',
        grade : '3'
    },
    {
        name : '황신우',
        img : Male,
        develop : 'BACK - END',
        github : 'https://github.com/huewilliams',
        grade : '3'
    },
    {
        name : '김대웅',
        img : Male,
        develop : 'BACK - END',
        github : 'https://github.com/dkssud9556',
        grade : '2'
    },
    {
        name : '오준상',
        img : Male,
        develop : 'FRONT - END',
        github : 'https://github.com/sema0710',
        grade : '2'
    },
    {
        name : '이우찬',
        img : LWC,
        develop : 'FRONT - END',
        github : 'https://github.com/woochanleee',
        grade : '2'
    },
    {
        name : '임용성',
        img : LYS,
        develop : 'BACK - END',
        github : 'https://github.com/LeagueLugas',
        grade : '2'
    },
    {
        name : '정우영',
        img : JWY,
        develop : 'BACK - END',
        github : 'https://github.com/o-ozogie',
        grade : '2'
    },
    {
        name : '김혜준',
        img : Female,
        develop : 'FRONT - END',
        github : 'https://github.com/hyejun0608',
        grade : '1'
    },
    {
        name : '임서영',
        img : Female,
        develop : 'DESIGNER',
        github : '',
        grade : '1'
    },
    {
        name : '전규현',
        img : Male,
        develop : 'FRONT - END',
        github : 'https://github.com/Ghyeon1215',
        grade : '1'
    }
]
  const refs = {
    mainRef : '',
    PortfolioRef : '',
    AboutRef : '',
    TeamRef : '',
    QnARef : ''
  }
  const [modal,setModal] = useState({
    status : false,
    title : '',
    developType : '',
    img : '',
    subInfo : '',
    developTeam : '',
    developers : {
        front : '',
        back : ''
    },
});
  const onClickScreenMoveButton = (e) => {
    const onClickValue = e.target.value;
    console.log(e.target.value)
    if(onClickValue === 'mainRef') return refs.mainRef.current.scrollIntoView();
    else if(onClickValue === 'PortfolioRef') return refs.PortfolioRef.current.scrollIntoView();
    else if(onClickValue === 'AboutRef') return refs.AboutRef.current.scrollIntoView();
    else if(onClickValue === 'TeamRef') return refs.TeamRef.current.scrollIntoView();
    else if(onClickValue === 'QnARef') return refs.QnARef.current.scrollIntoView();
  }
  return (
    <div className="App">
      <Header onClickScreenMoveButton={onClickScreenMoveButton}/>
      <MainPage refs={refs}/>
      <Service refs={refs} />
      <Portfolio refs={refs} setModal={setModal} modal={modal} />
      <About refs={refs}/>
      <Team refs={refs} memberArr={memberArr}/>
      <QnA refs={refs}/>
      <Slide memberArr={memberArr}/>
      <Footer/>
    </div>
  );
}

export default App;
