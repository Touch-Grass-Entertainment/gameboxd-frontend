import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import { Navbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen min-w-screen bg-background dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
