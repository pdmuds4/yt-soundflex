FROM --platform=linux/amd64 public.ecr.aws/lambda/python:3.12

COPY api ${LAMBDA_TASK_ROOT}/api
COPY main.py ${LAMBDA_TASK_ROOT}
COPY requirements.txt ${LAMBDA_TASK_ROOT}

RUN pip install -r ./requirements.txt

CMD [ "main.handler" ]