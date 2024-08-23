from pydantic import BaseModel, field_validator, ConfigDict
import requests
from api.src.utils import CustomError

class ThumbnailSrc(BaseModel):
    value: str
    model_config = ConfigDict(frozen=True)

    @field_validator('value')
    def check_value(cls, value):
        try:
            response = requests.head(value, allow_redirects=True)
            assert response.headers['Content-Type'].startswith('image/')
        except Exception as e:
            raise CustomError(
                status_code=400,
                message="サムネイル画像のURLが不正です。",
                detail=str(e)
            )
        else:
            return value