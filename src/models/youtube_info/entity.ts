import type { YoutubeInfoJsonType } from "./jsonType"

export default class YoutubeInfoEntity {
    constructor(
        // バリデーションチェックはAPIで行うのでvalueObjectは使わない
        private readonly _title       : string,
        private readonly _thumbnail_src: string,
        private readonly _channel_name: string
    ) {}

    get title(): string {
        return this._title;
    }

    get thumbnail_src(): string {
        return this._thumbnail_src;
    }

    get channel_name(): string {
        return this._channel_name;
    }

    json(): YoutubeInfoJsonType {
        return {
            title       : this._title,
            thumbnail_src: this._thumbnail_src,
            channel_name: this._channel_name
        }
    }
}