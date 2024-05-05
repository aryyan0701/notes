import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Notespage from "./components/Notespage";
import Home from "./components/Home";

function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithRoute showHome={showHome} setShowHome={setShowHome} />} />
        <Route path="/notes" element={<NotesWithOutlet />} />
      </Routes>
    </Router>
  );
}

function HomeWithRoute({ showHome, setShowHome }) {
  return (
    <>
      {showHome && <Home />}
      <Outlet />
    </>
  );
}

function NotesWithOutlet() {
  return (
    <>
    <Notespage/>
    <Outlet />
    </>
  );
}

export default App;