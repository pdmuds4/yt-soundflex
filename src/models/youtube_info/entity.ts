import type { YoutubeInfoJsonType } from "./jsonType"

export default class YoutubeInfoEntity {
    constructor(
        // バリデーションチェックはAPIで行うのでvalueObjectは使わない
        private readonly _title       : string,
        private readonly _thumnail_src: string,
        private readonly _channel_name: string
    ) {}

    json(): YoutubeInfoJsonType {
        return {
            title       : this._title,
            thumnail_src: this._thumnail_src,
            channel_name: this._channel_name
        }
    }
}