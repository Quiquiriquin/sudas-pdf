import './App.css';
import { SubjectProvider } from './context/SubjectContext';
import PreviewDocument from './PreviewDocument/PreviewDocument';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
