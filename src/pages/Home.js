import MovieCard from "../components/MovieCard";

const Home = () => {

    const movies=[
        {id:1, title:"La vie Scholaire" , release_date:"2019"},
        {id:1, title:"CREED" , release_date:"2020"},
        {id:1, title:"CREED II" , release_date:"2021"},
        {id:1, title:"CARS" , release_date:"2016"}    ]

    return ( 
        <div className="home">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    );
}

export default Home;