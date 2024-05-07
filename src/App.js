import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/Form/Form'; 
import Certificate from '../src/Components//Certificate/Certificate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Certificate" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
