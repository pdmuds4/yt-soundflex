import pytubefix, io, base64
from api.src.dto.encode_webm import *
from api.src.value_object import *

class EncodeWebmUseCase:
    def __init__(self, request: EncodeWebmReqDTO):
        self.youtube_object = pytubefix.YouTube(request.url.value)

    def execute(self) -> EncodeWebmResDTO:
        webm_buffer = io.BytesIO()
        webm_stream = self.youtube_object.streams.get_audio_only(subtype="webm")
        webm_stream.stream_to_buffer(webm_buffer)

        webm_bytes = webm_buffer.getvalue()
        encoded_web_bytes = base64.b64encode(webm_bytes).decode("utf-8")

        return EncodeWebmResDTO(
            webm_binary = WebmBinary(value=encoded_web_bytes)
        )