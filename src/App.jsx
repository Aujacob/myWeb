import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Make sure the path is correct
import Portfolio from './components/Portfolio'; // Make sure the path is correct
import PolaroidGallery from './components/Polaroid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/Polaroid" element={<PolaroidGallery />} /> 
        <Route path="*" element={<h1>__________________404 Not Found___________</h1>} />
        {/* Add more routes here if you want */}
      </Routes>
    </Router>
  );
}

export default App;
