import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const movies=[
        {id:1, title:"La vie Scholaire" , release_date:"2019"},
        {id:2, title:"CREED" , release_date:"2020"},
        {id:3, title:"CREED II" , release_date:"2021"},
        {id:4, title:"CARS" , release_date:"2016"}    ]

    const hundleSeach = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("")
    }

    return ( 
        <div className="home">
            <form onSubmit={hundleSeach} className="search-form">
            <input type="text" placeholder="Search a film here!" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery.toLocaleLowerCase()) && (
                <MovieCard movie={movie} key={movie.id}/>)
            ))}
        </div>
    );
}

export default Home;