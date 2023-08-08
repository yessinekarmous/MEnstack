import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

function App() {
  const struct={
    Firstname:"Jane",
    Lastname:"Doe",
    Age:45,
    Haircolor:"Black"}
    
  const struct2={
    Firstname:"John",
    Lastname:"Smith",
    Age:88,
    Haircolor:"Brown"
  }
  return (
    <div className="App">
      <Person person={struct} />
      <Person person={struct2} />
    
    
    </div>
  );
}

export default App;
