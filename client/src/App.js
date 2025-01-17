import './App.css';
import Listed from './pages/listed';
import LandingPage from './pages/landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Listed" element={<Listed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
