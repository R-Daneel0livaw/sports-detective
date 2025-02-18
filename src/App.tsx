import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import CaseFiles from './pages/CaseFiles';
import ForensicAnalysis from './pages/ForensicAnalysis';
import Profile from './pages/Profile';
import Marketplace from './pages/Marketplace';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casefiles" element={<CaseFiles />} />
          <Route path="/forensicanalysis" element={<ForensicAnalysis />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
