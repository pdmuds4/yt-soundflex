from pytubefix import YouTube
from api.src.dto.get_youtube_info import *
from api.src.value_object import *

class GetYoutubeInfoUseCase:
    def __init__(self, request: GetYoutubeInfoReqDTO):
        self.youtube_object = YouTube(request.url.value)

    def execute(self) -> GetYoutubeInfoResDTO:
        return GetYoutubeInfoResDTO(
            title         = Title       (value = self.youtube_object.title),
            thumbnail_src = ThumbnailSrc(value = self.youtube_object.thumbnail_url),
            channel_name  = ChannelName (value = self.youtube_object.author)
        )