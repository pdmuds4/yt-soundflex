import MovieEntity from "./entity";
import { MovieJsonType } from "./jsonType";

export default class MovieRepository {
    constructor(
        private readonly movies: MovieEntity[]
    ) {}
    

    save(movie: MovieEntity): MovieRepository {
        return new MovieRepository([
            ...this.movies,
            movie
        ])
    }

    delete(id: MovieJsonType['id']): MovieRepository {
        return new MovieRepository(this.movies.filter(movie => movie.id !== id));
    }

    getById(id: MovieJsonType['id']): MovieEntity | null {
        return this.movies.find(movie => movie.id === id) || null;
    }

    getLastId(): MovieJsonType['id'] {
        const last_movie: MovieEntity | undefined = this.movies.at(-1);
        return last_movie?.id || 0;
    }
}