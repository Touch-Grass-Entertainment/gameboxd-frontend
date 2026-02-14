import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/utils/themeProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
