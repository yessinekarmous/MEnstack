import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';
function App() {
  // const prop1=
  const value1={
    firstName:"Jane",
    lastName:"Doe",
    age:45 ,
    hairColor:"Black"}
  const value2={
    firstName:"John",
    lastName:"Smith",
    age:88 ,
    hairColor:"Brown"}
    const value3={
      firstName:"Milard",
      lastName:"Fillmore",
      age:50 ,
      hairColor:"Brown"}

    const value4={
      firstName:"Maria",
      lastName:"Smith",
      age:62 ,
      hairColor:"Brown"}

  return (
    <div className="App">
    
      <div><PersonCard item={value1}   /> </div>
      <div><PersonCard item={value2}   /> </div>
      <div><PersonCard item={value3}   /> </div>
      <div><PersonCard item={value4}   /> </div>
    </div>
  );

  }
export default App;
