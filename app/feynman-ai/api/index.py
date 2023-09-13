from fastapi import FastAPI
from pydantic import BaseModel
import requests
import os

class EvaluationRequest(BaseModel):
    concept: str
    explanation: str

app = FastAPI()


@app.get("/api/hello")
def hello():
    return {"message": "Hello World"}

@app.post("/api/evaluate")
def evaluate(request:EvaluationRequest):
    prompt =  '''
        Read the following concept and a student's in-your-own-words description and evaluate the student's
        description by the following criteria: 
        - coverage of the core aspects of the concept
        - clarity and simplicity of the explanation
        - Identify gaps in understanding and areas that need improvement
        
        Provide a score on how well the concept was explained.
        
        Concept: `{concept}`
        
        Student: `{explanation}`
        Evaluation:'''.format(concept=request.concept, explanation=request.explanation)
    request = {
        "max_tokens": "2000",
        "truncate": "END",
        "return_likelihoods": "NONE",
        "prompt": prompt
    }
    headers={
        "accept": "application/json",
        "authorization": "Bearer "+os.environ.get("COHERE_API_KEY"),
        "content-type": "application/json"
    }


    response = requests.post("https://api.cohere.ai/v1/generate", json=request, headers=headers)
    return response