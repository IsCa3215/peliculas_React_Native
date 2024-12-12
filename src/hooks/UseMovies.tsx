import { Suspense, useEffect, useState } from "react"
import { Movie } from "../config/Entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/Entities/ResultMovie";

export const useMovies = () => {


    const [nowPlaying, setNowPlaying] = useState<ResultMovie>();


    const [loading, setLoading] =useState(false);

    const loadMovies = async () => {
        const movies = await FilmAdapter.getMovies({...nowPlaying, route : FilmAdapter.ROUTES.nowPlaying});
        
    if (movies) {
        console.log(movies);
        setNowPlaying((prev) => ({
          ...movies, 
          movies: [...(prev?.movies || []), ...movies.movies], // Concatenamos los resultados
        }));
      }
    }
    const sumarPagina = () => {
        setNowPlaying((prevNowPlaying) =>
            prevNowPlaying
            ? { ...prevNowPlaying, page: (prevNowPlaying.page || 0) + 1 }
            : undefined
        );
    }

    useEffect(() => {
      loadMovies();
    }, [nowPlaying?.page])
    
    return {
        nowPlaying, loading, sumarPagina
    }
}