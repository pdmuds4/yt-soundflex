import MovieEntity from "./entity";
import { MovieJsonType } from "./jsonType";

export default class MovieRepository {
    constructor(
        private readonly movies: MovieEntity[]
    ) {}
    
    // SELECT
    getById(id: MovieJsonType['id']): MovieEntity | null {
        return this.movies.find(movie => movie.id === id) || null;
    }

    getAll(): MovieEntity[] {
        return this.movies;
    }
    
    // CHECK
    getLastId(): MovieJsonType['id'] {
        const last_movie: MovieEntity | undefined = this.movies.at(-1);
        return last_movie?.id || 0;
    }

    isEmpty(): boolean {
        return this.movies.length === 0;
    }

    // UPDATE
    save(movie: MovieEntity): MovieRepository {
        return new MovieRepository([
            ...this.movies,
            movie
        ])
    }

    //DELETE
    delete(id: MovieJsonType['id']): MovieRepository {
        return new MovieRepository(this.movies.filter(movie => movie.id !== id));
    }

    
    deleteAll(): MovieRepository {
        return new MovieRepository([]);
    }

    


}