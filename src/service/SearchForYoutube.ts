import { GetYoutubeInfoRequestType, GetYoutubeInfoResponseType } from "@domain/api/get_youtube_info";
import YoutubeInfoEntity from "@domain/youtube_info/entity";
import { callAPI } from "@util/callApi";

export default class SearchForYoutubeUseCase {
    constructor(
        private request: GetYoutubeInfoRequestType
    ){}

    async execute(): Promise<YoutubeInfoEntity> {
        const response = await callAPI<GetYoutubeInfoRequestType>(
            process.env.API_KEY ? process.env.API_KEY : '',
            'POST',
            '/api/get_youtube_info',
            this.request
        ) satisfies GetYoutubeInfoResponseType;

        return new YoutubeInfoEntity(
            response.title,
            response.thumbnail_src,
            response.channel_name
        );
    }
}