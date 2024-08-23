import uvicorn

def run():
    uvicorn.run("main:app",port=3000, reload=True)