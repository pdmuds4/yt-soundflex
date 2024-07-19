import { Url, Format, SaveName } from "./value_object";
import type { ConvertInfoJsonType } from "./jsonType";

export default class ConvertInfoEntity {
    constructor(
        private readonly _url       : Url,
        private          format     : Format,
        private          savename   : SaveName,
    ) {}

    set newFormat(format: Format) {
        this.format = format
    }

    set newSaveName(savename: SaveName) {
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