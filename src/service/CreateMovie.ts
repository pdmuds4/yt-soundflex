import YoutubeInfoEntity from "@domain/youtube_info/entity"
import ConvertInfoEntity from "@domain/convert_info/entity"
import MovieEntity from "@domain/movie/entity"

import MovieId from "@domain/movie/_id";

export default class CreateMovieUseCase {
    static execute(
        id: MovieId,
        youtube_info: YoutubeInfoEntity,
        convert_info: ConvertInfoEntity
    ): MovieEntity {
        return new MovieEntity(id, youtube_info, convert_info);
    }
}