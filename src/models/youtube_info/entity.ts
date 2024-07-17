import type { YoutubeInfoJsonType } from "./jsonType"

export default class YoutubeInfoEntity {
    constructor(
        // バリデーションチェックはAPIで行うのでvalueObjectは使わない
        private _title       : string,
        private _thumnail_src: string,
        private _channel_name: string
    ) {}

    get json(): YoutubeInfoJsonType {
        return {
            title       : this._title,
            thumnail_src: this._thumnail_src,
            channel_name: this._channel_name
        }
    }
}