import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import People from './Components/People';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Planets from './Components/Planets';
import Error from './Components/Error';

function App() {
 
   return (
    <BrowserRouter>
    <div className="App" >
      <Nav />
      <Routes>
        <Route path="/People/:id" element={<People />}></Route>
        <Route path="/Planets/:id" element={<Planets />}></Route>
        <Route path="/Error" element={<Error />}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );

}

export default App;
 