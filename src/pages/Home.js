import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import { searchMovies , getPopularMovies } from "../services/api";

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err){ 
                console(err)
                setError("Can't Load movie!")
            }
            finally {setLoading(false)}
        }
        loadPopularMovies();
    }, [])

    const hundleSeach = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults)
            setError(null)
        }
        catch(err){
            console.log(err)
            setError("Failed to search Movies!")
        }
        finally{
            setLoading(false)
        }
    }

    return ( 
        <div className="home">
            <form onSubmit={hundleSeach} className="search-form">
            <input type="text" placeholder="Search a film here!" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            {loading && <div className="lodaing">Loading...</div> }
            {error && <div>{error}</div>}
            <div className="movies-grid">
                {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery.toLocaleLowerCase()) && (
                <MovieCard movie={movie} key={movie.id}/>)
            ))}
            </div>
        </div>
    );
}

export default Home;