import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontent from './Components/Subcontent';
import Advertissment from './Components/Advertissment';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
          <Subcontent />
          <Subcontent />
          <Subcontent />
          <Advertissment />
      </Main>
      
    </div> 
  );
}

export default App;
