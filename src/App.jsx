import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './assets/components/Home';
import Detail from './assets/components/Detail';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<Detail/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
