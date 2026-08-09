import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <>
                <h2 className="favorites">Favorites</h2>

                <div>
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard
                                movie={movie}
                                key={movie.id}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start Adding Favorite Movies</p>
        </div>
    );
};

export default Favorite;