from fastapi import FastAPI
from pydantic import BaseModel
import requests
import os
from requests.structures import CaseInsensitiveDict

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
Act as a criticaleducator expert at giving positive criticism.
Read the following concept prefixed with `Concept:` and a student's in-your-own-words explanation prefixed with `Student:` and evaluate the student's
explanation by the following criteria:
- coverage of the core aspects of the concept.
- clarity and simplicity of the explanation
- Identify gaps in understanding and areas that need improvement

Provide a score out between 0 and 10 based on how well the above criteria were met by the Student's explanation.

Only use information from Concept section between the tick marks as the concept. Do not relate it to any of your existing knowledge. Just use the concept stand alone.
Keep it to three sentences. Do not repeat yourself.
        
Concept: `{concept}`
        
Student: `{explanation}`
        
Evaluation:'''.format(concept=request.concept, explanation=request.explanation)
    print(prompt)
    request = {
        "model": "command",
        "max_tokens": 300,
        "temperature": 0,
        "truncate": "END",
        "return_likelihoods": "NONE",
        "prompt": prompt
    }
    api_key = os.environ.get("COHERE_API_KEY");
    headers= CaseInsensitiveDict()
    headers["accept"] = "application/json"
    headers["authorization"] = "Bearer "+ api_key
    headers["content-type"] = "application/json"

    response = requests.post("https://api.cohere.ai/v1/generate", json=request, headers=headers)
    print(response.json())
    return response.json()["generations"][0]["text"]