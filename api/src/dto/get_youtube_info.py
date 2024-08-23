from pydantic import BaseModel
from api.src.value_object import *

class GetYoutubeInfoReqDTO(BaseModel):
    url: Url

class GetYoutubeInfoResDTO(BaseModel):
    title: Title
    thumbnail_src: ThumbnailSrc
    channel_name: ChannelName


class GetYoutubeInfoResponseModel(BaseModel):
    title: str
    thumbnail_src: str
    channel_name: str