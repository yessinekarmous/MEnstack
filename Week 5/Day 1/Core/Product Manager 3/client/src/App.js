// import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import DisplayOne from "./Views/DisplayOne";

import Nav from "./Views/Nav";
import Update from "./Views/Update";
import Main from "./Views/Main";

function App() {
  return (
    <div className="App">
      <h1
        style={{ width: "100%", backgroundColor: "#5BC0DE", padding: "15px" }}
      >
        Product Manager
      </h1>

      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/DisplayOne/:id" element={<DisplayOne />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
