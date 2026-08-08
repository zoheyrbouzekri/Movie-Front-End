import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <MovieCard movie={{title: "Creed", release_date:"2024"}}/>
      <MovieCard movie={{title: "Creed II", release_date:"2025"}}/>
    </div>
  );
}

export default App;
