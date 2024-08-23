from pydantic import BaseModel, field_validator, ConfigDict
from io import BytesIO
import base64, re
from api.src.utils import CustomError

class WebmBinary(BaseModel):
    value: str
    model_config = ConfigDict(frozen=True)

    @field_validator('value')
    def check_value(cls, value: str):
        try:
            assert re.match(r'^[A-Za-z0-9+/]*={0,2}$', value)
            bytes_value = BytesIO(base64.b64decode(value))

            current_position = bytes_value.tell()
            bytes_value.seek(0)
            magic_number = bytes_value.read(4)
            bytes_value.seek(current_position)
            assert magic_number == b'\x1aE\xdf\xa3'
        except Exception as e:
            raise CustomError(
                status_code=400,
                message="音声ファイルのバイナリが不正です。",
                detail=str(e)
            )
        else:
            return value