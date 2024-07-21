import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Question from './pages/Question';
import PageTemplate1 from './pages/PageTemplate1';
import PageTemplate2 from './pages/PageTemplate2';
import PageTemplate3 from './pages/PageTemplate3';
import PageTemplate4 from './pages/PageTemplate4';
import PageTemplate5 from './pages/PageTemplate5';
import PageTemplate6 from './pages/PageTemplate6';
import Letter from './pages/Letter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/question" element={<Question />} />
        <Route path="/page-template1" element={<PageTemplate1 />} />
        <Route path="/page-template2" element={<PageTemplate2 />} />
        <Route path="/page-template3" element={<PageTemplate3 />} />
        <Route path="/page-template4" element={<PageTemplate4 />} />
        <Route path="/page-template5" element={<PageTemplate5 />} />
        <Route path="/page-template6" element={<PageTemplate6 />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default App;
