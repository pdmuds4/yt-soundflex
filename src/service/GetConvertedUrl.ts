import { Ref, RefObject } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";

import { EncodeWebmRequestType, EncodeWebmResponseType } from "@domain/api/encode_webm";
import { callAPI } from "@util/callApi";
import { decodeBase64 } from "@util/decodeBase64";
import ConvertInfoEntity from "@domain/convert_info/entity";

export default class GetConvertedUrlUseCase {
    constructor(
        readonly ffmpeg_instance: FFmpeg
    ){}

    async execute(convert_info: ConvertInfoEntity): Promise<string> {
        const request: EncodeWebmRequestType = { url : convert_info.url.value };

        const response = await callAPI<EncodeWebmRequestType>(
            process.env.NEXT_PUBLIC_API_KEY as string,
            'POST',
            '/api/encode_webm',
            request
        ) satisfies EncodeWebmResponseType;

        const request_format = convert_info.format?.value;

        await this.ffmpeg_instance.writeFile('input.webm', decodeBase64(response.webm_binary));
        await this.ffmpeg_instance.exec(['-i', 'input.webm', `output.${request_format}`]);
        const converted_file = await this.ffmpeg_instance.readFile(`output.${request_format}`);

        return URL.createObjectURL(new Blob([converted_file], { type: `audio/${request_format}` }));
    }
}