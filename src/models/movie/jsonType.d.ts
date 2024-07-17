import type { YoutubeInfoJsonType } from "../youtube_info/jsonType";
import type { ConvertInfoJsonType } from "../convert_info/jsonType";

export type MovieJsonType = {
    id: number;
    youtube_info: YoutubeInfoJsonType;
    convert_info: ConvertInfoJsonType;
}