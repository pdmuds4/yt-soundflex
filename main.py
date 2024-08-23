from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from mangum import Mangum
import os, dotenv

from api.src.value_object import *
from api.src.dto import *
from api.src.service import *
from api.src.utils import CustomError


app = FastAPI()
dotenv.load_dotenv('.env')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def api_key_middleware(request: Request, call_next):
    api_key = request.headers.get("X-API-Key")
    if request.url.path not in ["/", "/docs", "/openapi.json"]:
        if api_key is None:
            return JSONResponse(status_code=400, content={"message": "Missing API Key"})
        elif api_key != os.environ.get('API_KEY'):
            return JSONResponse(status_code=401, content={"message": "Invalid API Key"})
        else:
            return await call_next(request)
    else:
        return await call_next(request)



@app.get("/", tags=["root"])
async def route():
    return { "message": 'This is YTFlex rooter' }


@app.get("/get_youtube_info", tags=["main"], response_model=GetYoutubeInfoResponseModel)
async def get_youtube_info(url: str):
    try:
        request_dto = GetYoutubeInfoReqDTO(url=Url(value=url))
        usecase = GetYoutubeInfoUseCase(request_dto)
        response_dto = usecase.execute()

        return JSONResponse(
            status_code=200,
            content=GetYoutubeInfoResponseModel(
                title=response_dto.title.value,
                thumbnail_src=response_dto.thumbnail_src.value,
                channel_name=response_dto.channel_name.value
            ).model_dump()
        )
    except Exception as e:
        if isinstance(e, CustomError):
            return JSONResponse(
                status_code=e.status_code,
                content={
                    "message": e.message,
                    "detail": e.detail
                }
            )
        else:
            return JSONResponse(
                status_code=500,
                content={
                    "message": "不明なエラーが発生しました",
                    "detail": str(e)
                }
            )



@app.get("/encode_webm", tags=["main"], response_model=EncodeWebmResponseModel)
async def encode_webm(url: str):
    try:
        request_dto = EncodeWebmReqDTO(url=Url(value=url))
        usecase = EncodeWebmUseCase(request_dto)
        response_dto = usecase.execute()

        return JSONResponse(
            status_code=200,
            content=EncodeWebmResponseModel(
                webm_binary=response_dto.webm_binary.value
            ).model_dump()
        )
    except Exception as e:
        if isinstance(e, CustomError):
            return JSONResponse(
                status_code=e.status_code,
                content={
                    "message": e.message,
                    "detail": e.detail
                }
            )
        else:
            return JSONResponse(
                status_code=500,
                content={
                    "message": "不明なエラーが発生しました",
                    "detail": str(e)
                }
            )


handler = Mangum(app, lifespan="off")