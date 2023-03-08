import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSS from "./pages/Css";
import HTML from "./pages/Html";
import JavaScript from "./pages/JavaScript";
import React from "./pages/React";
import Sanity from "./pages/Sanity";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CSS />}>
          <Route index element={<HTML />} />
          <Route path="JavaScript" element={<JavaScript />} />
          <Route path="React" element={<React />} />
          <Route path="Sanity" element={<Sanity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);