import { useMovieContext } from "../context/MovieContext"
import "../css/Favourite.css"
import MovieCard from "../components/MovieCard"

function Favourite(){
    const {favorites} = useMovieContext();

    if (favorites.length > 0) {
        return(
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                        {favorites.map((movie) => (<MovieCard movie = {movie} key = {movie.id}/>))}
                </div>
            </div>
    );
    }
    return(
        <div className="favorites-empty">
            <h2>No favourite movies yet!!!</h2>
            <p>Your favourite movies will appear here</p>
        </div>
    );

}

export default Favourite