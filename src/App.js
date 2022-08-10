import './App.css';
import { SubjectProvider } from './context/SubjectContext';
import PreviewDocument from './PreviewDocument/PreviewDocument';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";


function App() {
  return (
    <SubjectProvider>
      <Router>
        <Routes>
          <Route
            path="/documento/:id"
            element={<PreviewDocument />} 
          />
          <Route
            path="/"
            element={<p>Hola</p>}
          />

        </Routes>
      </Router>
    </SubjectProvider>
  );
}

export default App;
