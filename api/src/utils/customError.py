class CustomError(Exception):
    def __init__(self, status_code: int, message: str, detail: str = None):
        self.message = message
        self.status_code = status_code
        self.detail = detail
        
        super().__init__(self.message)