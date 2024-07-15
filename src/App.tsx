import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Question from './pages/Question';
import PageTemplate from './pages/PageTemplate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/question" element={<Question />} />
        <Route path="/page-template" element={<PageTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;
