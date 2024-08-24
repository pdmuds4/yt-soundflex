import { GetYoutubeInfoRequestType, GetYoutubeInfoResponseType } from "@domain/api/get_youtube_info";
import YoutubeInfoEntity from "@domain/youtube_info/entity";
import { callAPI } from "@util/callApi";

export default class SearchForYoutubeUseCase {
    constructor(
        private request: GetYoutubeInfoRequestType
    ){}

    async execute(api_key?: string): Promise<YoutubeInfoEntity> {
        const response = await callAPI<GetYoutubeInfoRequestType>(
            process.env.NEXT_PUBLIC_API_KEY as string,
            'GET',
            `/api/get_youtube_info?url=${this.request.url}`
        ) satisfies GetYoutubeInfoResponseType;

        return new YoutubeInfoEntity(
            response.title,
            response.thumbnail_src,
            response.channel_name
        );
    }
}