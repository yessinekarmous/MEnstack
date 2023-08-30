// import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import { Routes, Route } from "react-router-dom";
import DisplayOne from "./Components/DisplayOne";
import DisplayAll from "./Components/DisplayAll";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form /> <DisplayAll />
            </>
          }
        />
        <Route path="/DisplayOne/:id" element={<DisplayOne />} />
      </Routes>
    </div>
  );
}

export default App;
