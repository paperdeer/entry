import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import './App.css'
import Service from "./Components/ServicePage/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import QnA from "./Components/QnA/QnA";
import Footer from "./Components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
function App() {
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
      <Team refs={refs}/>
      <QnA refs={refs}/>
      <Footer/>
    </div>
  );
}

export default App;
