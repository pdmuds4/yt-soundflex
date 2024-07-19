import Id from './_id';
import YoutubeInfo from '../youtube_info/entity';
import ConvertInfo from '../convert_info/entity';
import type { MovieJsonType } from './jsonType';

export default class MovieEntity {
    constructor(
        private readonly _id: Id,
        private readonly _youtube_info: YoutubeInfo,
        private readonly _convert_info: ConvertInfo
    ){}
    
    get id(): Id["value"] {
        return this._id.value;
    }

    get youtubeInfo(): YoutubeInfo {
        return this._youtube_info;
    }

    get convertInfo(): ConvertInfo {
        return this._convert_info;
    }

    json(): MovieJsonType {
        return {
            id: this._id.value,
            youtube_info: this._youtube_info.json(),
            convert_info: this._convert_info.json()
        }
    }

}