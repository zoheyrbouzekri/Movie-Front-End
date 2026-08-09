import Favorite from './pages/Favorite';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./css/App.css";
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;