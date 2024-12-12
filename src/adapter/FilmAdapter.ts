import { Config } from "../config/Config";
import { Movie } from "../config/Entities/Movie";
import ResultMovie from "../config/Entities/ResultMovie";
import { movieMapper } from "../config/Mapper/movieMapper";
import { resultMovieMapper } from "../config/Mapper/resultMovieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory } from "./http/HttpFactory";
import { HttpFactory2 } from "./http/HttpFactory2";
import { HttpFetch } from "./http/HttpFetch";


interface DataMovieRequest {
    total?: number;
    page?: number;
    route?: string;
}

const defaultMovie: ResultMovie = {
    total: 0,
    page: 0,
    movies: []
}

export class FilmAdapter {
    static ROUTES = {
        nowPlaying: "/now_playing"
    }

    static async getMovies({route=this.ROUTES.nowPlaying, page, total}: DataMovieRequest): Promise<ResultMovie> {
        console.log(route);
        console.log(page);
        const http = HttpFactory2.build();

        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        if(page == null) page = 1;
        if(total == null) total = 0;
        const movies = await http.getFilms(route, page, total);

        if (movies instanceof HttpError) return defaultMovie;
        const dataMovies = resultMovieMapper(movies);
        return dataMovies;
    }
}