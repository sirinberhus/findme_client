import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './css/style.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Diğer sayfalar için de benzer rotalar ekleyebilirsiniz */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
