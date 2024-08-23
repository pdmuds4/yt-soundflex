from pydantic import BaseModel
from api.src.value_object import *

class EncodeWebmReqDTO(BaseModel):
    url: Url


class EncodeWebmResDTO(BaseModel):
    webm_binary: WebmBinary


class EncodeWebmResponseModel(BaseModel):
    webm_binary: str