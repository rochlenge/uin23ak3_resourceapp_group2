import './App.css';
import './css/sass/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Hjem from "./pages/Hjem"
import Css from "./pages/Css";
import Html from "./pages/Html";
import JavaScript from "./pages/JavaScript";
import React from "./pages/React";
import Sanity from "./pages/Sanity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hjem />}>
          <Route path='/Css' element={<Css />} />
          <Route path='/Html' element={<Html />} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/React" element={<React />} />
          <Route path="/Sanity" element={<Sanity />} />
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;