from pydantic import BaseModel, ConfigDict

class Title(BaseModel):
    value: str
    model_config = ConfigDict(frozen=True)