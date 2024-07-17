import { Id, Url, Format, SaveName } from "./value_object";
import type { MovieJsonType } from "./jsonType";

export default class MovieEntity {
    private constructor(
        private readonly _id        : Id,
        private          _url       : Url,
        private          format     : Format,
        private          savename   : SaveName,
    ) {}

    set changeFormat(format: Format) {
        this.format = format
    }

    set changeSaveName(savename: SaveName) {
        this.savename = savename
    }
    
    get json(): MovieJsonType {
        return {
            id      : this._id.value,
            url     : this._url.value,
            format  : this.format.value,
            savename: this.savename.value,
        }
    }
}