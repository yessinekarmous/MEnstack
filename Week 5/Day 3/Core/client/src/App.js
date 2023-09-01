import "./App.css";

import { Routes, Route } from "react-router-dom";
import Form from "./Views/Form";
import Update from "./Views/Update";
import Dachbord from "./Components/Dachbord";

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Dachbord />} />
        <Route path="/new" element={<Form />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
