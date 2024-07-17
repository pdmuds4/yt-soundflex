import { Url, Format, SaveName } from "./value_object";
import type { ConvertInfoJsonType } from "./jsonType";

export default class ConvertInfoEntity {
    private constructor(
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
    
    json(): ConvertInfoJsonType {
        return {
            url     : this._url.value,
            format  : this.format.value,
            savename: this.savename.value,
        }
    }
}