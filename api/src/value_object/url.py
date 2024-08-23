from pydantic import BaseModel, field_validator, ConfigDict
from pytubefix import YouTube

from api.src.utils import CustomError

class Url(BaseModel):
    value: str
    model_config = ConfigDict(frozen=True)

    @field_validator('value')
    def check_value(cls, value: str):
        try:
            YouTube(value).streams
        except Exception as e:
            raise CustomError(
                status_code=400,
                message=f"Youtube動画のURLが不正です。{value}は見つかりませんでした。",
                detail=str(e)
            )
        else:
            return value

