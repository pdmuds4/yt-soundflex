import { Url, Format, SaveName } from "./value_object";
import type { ConvertInfoJsonType } from "./jsonType";

export default class ConvertInfoEntity {
    constructor(
        private readonly _url        : Url,
        private          _format?    : Format,
        private          _savename?  : SaveName,
    ) {}

    get url(): Url {
        return this._url
    }

    get format(): Format | undefined {
        return this._format
    }

    get savename(): SaveName | undefined {
        return this._savename
    }
    
    json(): Partial<ConvertInfoJsonType> {
        return {
            url     : this._url.value,
            format  : this._format?.value,
            savename: this._savename?.value,
        }
    }
}