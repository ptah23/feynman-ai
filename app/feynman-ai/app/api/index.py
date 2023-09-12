from fastapi import FastAPI
from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    concept: str
    explanation: str

app = FastAPI()


@app.get("/api/hello")
def hello():
    return {"message": "Hello World"}

@app.post("/api/evaluate")
def evaluate(request:EvaluationRequest):
    return "Evaluation complete"