import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ShowNumb from './Components/ShowNumb';
  
function App() {

  
  return  (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/Home"element={ <Home />} />
        <Route path="/:content/:color/:backColor" element={<ShowNumb />} />
        // <Route path= "/:content/:e" element={<ShowNumb />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
