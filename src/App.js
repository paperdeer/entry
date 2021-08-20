import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import './App.css'
import Service from "./Components/ServicePage/Service";
function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Service/>
    </div>
  );
}

export default App;
