# Feynman-AI

This is a tool to help learners practice explaining concepts using the Feynman learning technique by leveraging AI assessment.

## Description

Feynman-AI allows users to input a concept from a textbook or other source and then type out an explanation of the concept in their own words. The explanation is run through an AI engine which analyzes the text and provides feedback:

- Assesses coverage of the core aspects of the concept
- Checks for clarity and simplicity of the explanation
- Identifies gaps in understanding and areas that need improvement
- Provides a score on how well the concept was explained

The goal is to help learners practice breaking down complex ideas simply, finding gaps in understanding, and iterating to build fluency in explaining concepts from first principles.

## Usage

1. Enter a concept you want to learn about
2. Write out an explanation of the concept in your own words
3. Click submit
4. Review the AI assessment and feedback
5. Iterate on areas highlighted for improvement  
6. Repeat process until achieving a high score

## Technologies

- Natural language processing with HuggingFace Transformers/LLM like OpenAI and Llama2
- Front end candidates:
  - React like this https://vercel.com/templates/next.js/chatbot-ui
  - Gradio like this https://www.gradio.app/docs/chatinterface
- [FastAPI](https://fastapi.tiangolo.com/) backend
- PostgreSQL/ActiveLoop/Pinecone database (Optional)

## Contributors

This project was created by [Peter Gelderbloem](https://github.com/ptah23) as part of [100.builders](https://100.builders/). Feedback and contributions welcome!

## License

This project is open source and available under the [TBC] license.
