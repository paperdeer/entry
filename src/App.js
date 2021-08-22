import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import './App.css'
import Service from "./Components/ServicePage/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import QnA from "./Components/QnA/QnA";
import { useEffect, useRef, useState } from "react";
function App() {
  const refs = {
    mainRef : '',
    PortfolioRef : '',
    AboutRef : '',
    TeamRef : '',
    QnARef : ''
  }
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
      <Portfolio refs={refs} />
      <About refs={refs}/>
      <Team refs={refs}/>
      <QnA refs={refs}/>
    </div>
  );
}

export default App;
