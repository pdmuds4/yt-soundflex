import { MovieId, MovieUrl, MovieFormat, MovieSaveName } from "./value_object";
import type { MovieJsonType } from "./jsonType";

export default class MovieEntity {
    private constructor(
        private readonly _id     : MovieId,
        private          _url    : MovieUrl,
        private          format  : MovieFormat,
        private          savename: MovieSaveName
    ) {}

    set changeFormat(format: MovieFormat) {
        this.format = format
    }

    set changeSaveName(savename: MovieSaveName) {
        this.savename = savename
    }
    
    get json(): MovieJsonType {
        return {
            id      : this._id.value,
            url     : this._url.value,
            format  : this.format.value,
            savename: this.savename.value
        }
    }
}