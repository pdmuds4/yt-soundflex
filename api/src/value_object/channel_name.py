from pydantic import BaseModel, ConfigDict

class ChannelName(BaseModel):
    value: str
    model_config = ConfigDict(frozen=True)