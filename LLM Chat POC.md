# Proof of concept

## Approach

LLMs are flexible general use NLP models and can be used to validate whether an application idea can be achieved with modern NLP techniques, specifically Transformers.
As an example I chose a description of the concept of Gradient Descent, a cornerstone algorithm of Machine Learning and asked Claude.ai to provide a fake student in-your-own-words response.

## Experiments
### Example 1
Claude ai is prompted to provide a student in-your-own-words response and this is tehn fed into ChatGPT to do the assessment
#### Claude.ai Prompt
```
Read the following concept description and provide an in-your-own-words version that is simplified
and covers the entire concept:
`Gradient Descent is an iterative optimization process that searches for an objective function’s
optimum value (Minimum/Maximum). It is one of the most used methods for changing a model’s parameters
in order to reduce a cost function in machine learning projects.  

The primary goal of gradient descent is to identify the model parameters that provide the maximum
accuracy on both training and test datasets. In gradient descent, the gradient is a vector pointing
in the general direction of the function’s steepest rise at a particular point.
The algorithm might gradually drop towards lower values of the function by moving in the opposite
direction of the gradient, until reaching the minimum of the function.`
```
#### Claude.ai response
```
Gradient descent is an optimization algorithm that is commonly used to minimize cost functions in
machine learning models. It works by iteratively adjusting the model parameters, like the weights
and biases in a neural network, in the direction that reduces the cost function. 

The goal is to converge on the optimal set of parameters that minimize the cost, like the error
between predictions and true labels. Gradient descent starts with random initial parameters, then
calculates the gradient of the cost function. The gradient tells you which direction to update the
parameters to reduce the cost. The parameters are updated by a small amount in the negative gradient
direction. This process is repeated until the algorithm converges on a minimum cost.

So in summary, gradient descent iteratively fine-tunes the model parameters by calculating the gradient
and moving in the direction that reduces the cost function. By repeating this process, it can find the
optimal parameters that minimize the cost and maximize model accuracy.
```
#### ChatGPT Prompt
```
Read the following concept and a student's in-your-own-words description and evaluate the student's
description by the following criteria: 
- coverage of the core aspects of the concept
- clarity and simplicity of the explanation
- Identify gaps in understanding and areas that need improvement
Provides a score on how well the concept was explained.
Concept: `Gradient Descent is an iterative optimization process that searches for an objective function’s
 optimum value (Minimum/Maximum). It is one of the most used methods for changing a model’s parameters in
 order to reduce a cost function in machine learning projects.  
The primary goal of gradient descent is to identify the model parameters that provide the maximum accuracy
 on both training and test datasets. In gradient descent, the gradient is a vector pointing in the general
 direction of the function’s steepest rise at a particular point. The algorithm might gradually drop towards
 lower values of the function by moving in the opposite direction of the gradient, until reaching the minimum
 of the function.`

Student: `Gradient descent is an optimization algorithm that is commonly used to minimize cost functions in
 machine learning models. It works by iteratively adjusting the model parameters, like the weights and biases
 in a neural network, in the direction that reduces the cost function.

The goal is to converge on the optimal set of parameters that minimize the cost, like the error between
 predictions and true labels. Gradient descent starts with random initial parameters, then calculates the gradient
 of the cost function. The gradient tells you which direction to update the parameters to reduce the cost.
The parameters are updated by a small amount in the negative gradient direction. This process is repeated until
the algorithm converges on a minimum cost.

So in summary, gradient descent iteratively fine-tunes the model parameters by calculating the gradient and moving
 in the direction that reduces the cost function. By repeating this process, it can find the optimal parameters that
 minimize the cost and maximize model accuracy.`
Evaluation:
```
#### ChatGPT Reponse
```
Let's evaluate the student's description of the concept of gradient descent based on the provided criteria:

1. **Coverage of Core Aspects of the Concept:** The student's description covers the core aspects of gradient
descent quite well. They mention that it's an optimization algorithm used to minimize cost functions in
machine learning models,  which aligns with the concept. The iterative nature of the process, adjusting model
 parameters, calculating gradients, and moving in the direction of reduced cost are all included.
The primary goal of finding optimal parameters for maximum accuracy on training and test datasets is also
addressed.

2. **Clarity and Simplicity of the Explanation:** The student's explanation is clear and concise. They use
familiar concepts like adjusting parameters, calculating gradients, and updating in the direction of cost
reduction to convey the core ideas of gradient descent. The explanation is straightforward and avoids
unnecessary technical jargon, making it accessible to a wide audience.

3. **Identify Gaps in Understanding and Areas for Improvement:** The student's description is well-structured
and covers the main aspects of gradient descent. However, there are a few minor areas that could be further
addressed:
   - **Learning Rate:** While the student mentions updating parameters by a small amount, they don't explicitly
mention the learning rate, which determines the size of the steps taken in each iteration.
   - **Types of Gradient Descent:** The student doesn't distinguish between different types of gradient descent
(batch, stochastic, mini-batch), which could add more depth to the understanding.
   - **Convergence Criteria:** The explanation doesn't explicitly state what criteria are used to determine
when the algorithm has converged to a minimum.

4. **Score on Explanation:** Considering the provided criteria and the evaluation of the student's description,
I would give the student's explanation a score of 8.5 out of 10. The description is clear, covers the main
aspects of gradient descent, and provides a solid understanding of the iterative optimization process.
Addressing the minor gaps mentioned above would enhance the completeness of the explanation.

Overall, the student has done a commendable job explaining the concept of gradient descent in simple and
understandable terms. With a few minor additions, the explanation could become even more comprehensive
and provide a well-rounded understanding of the topic.
```
### Example 2
#### Claude.ai Prompt
```
Read the following concept description and provide an in-your-own-words version that is simplified
and covers the entire concept:
`Gradient Descent is an iterative optimization process that searches for an objective function’s
optimum value (Minimum/Maximum). It is one of the most used methods for changing a model’s parameters
in order to reduce a cost function in machine learning projects.  

The primary goal of gradient descent is to identify the model parameters that provide the maximum
accuracy on both training and test datasets. In gradient descent, the gradient is a vector pointing
in the general direction of the function’s steepest rise at a particular point.
The algorithm might gradually drop towards lower values of the function by moving in the opposite
direction of the gradient, until reaching the minimum of the function.`
```
#### Claude.ai response
```
Here's an explanation of gradient descent using the Feynman learning technique:

Imagine you're standing in a valley and you want to find the lowest point. You can't see the entire valley,
but you can look around your immediate area. You notice the ground slopes down more steeply to your left.
So you take a step to the left, going downhill. Now you look around again - the slope is still steeper to
your left, so you step that way again. You keep doing this, taking steps in the direction of the steepest
downward slope, until you can't go any lower - you've reached the valley floor. 

This is similar to how gradient descent works. We have a function we want to minimize, like the cost of a
machine learning model. We can't see the whole function landscape, but we can calculate the slope or gradient
 at our current position. The gradient tells us which direction to move to go downhill - to lower the cost
function. We iteratively take small steps in the negative gradient direction, recalculating the gradient as
we go, until we reach the minimum cost. 

So gradient descent starts at some random point, measures the local gradient, takes a step downhill, and
repeats this to "walk down" the cost function valley until it reaches the bottom or minimum value. The gradient
helps guide each step towards the optimal low point just like walking downhill guides you to the valley floor.
```
#### ChatGPT Prompt
```
Read the following concept and a student's in-your-own-words description and evaluate the student's
description by the following criteria: 
- coverage of the core aspects of the concept
- clarity and simplicity of the explanation
- Identify gaps in understanding and areas that need improvement
Provides a score on how well the concept was explained.

Concept:
`Gradient Descent is an iterative optimization process that searches for an objective function’s
optimum value (Minimum/Maximum). It is one of the most used methods for changing a model’s parameters
in order to reduce a cost function in machine learning projects. The primary goal of gradient descent
is to identify the model parameters that provide the maximum accuracy on both training and test datasets.
In gradient descent, the gradient is a vector pointing in the general direction of the function’s steepest
 rise at a particular point. The algorithm might gradually drop towards lower values of the function by
moving in the opposite direction of the gradient, until reaching the minimum of the function.`

Student: `Imagine you're standing in a valley and you want to find the lowest point. You can't see the
entire valley, but you can look around your immediate area. You notice the ground slopes down more steeply
to your left. So you take a step to the left, going downhill. Now you look around again - the slope is
still steeper to your left, so you step that way again. You keep doing this, taking steps in the direction
 of the steepest downward slope, until you can't go any lower - you've reached the valley floor.

This is similar to how gradient descent works. We have a function we want to minimize, like the cost of a
machine learning model. We can't see the whole function landscape, but we can calculate the slope or gradient
at our current position. The gradient tells us which direction to move to go downhill - to lower the cost function.
We iteratively take small steps in the negative gradient direction, recalculating the gradient as we go, until
we reach the minimum cost.

So gradient descent starts at some random point, measures the local gradient, takes a step downhill, and repeats
this to "walk down" the cost function valley until it reaches the bottom or minimum value. The gradient helps guide
each step towards the optimal low point just like walking downhill guides you to the valley floor.`
Evaluation:
```
#### ChatGPT Response
```
The student's description provides a vivid analogy to explain the concept of gradient descent, comparing
it to walking downhill in a valley to find the lowest point. Let's evaluate the student's description
based on the provided criteria:

1. **Coverage of Core Aspects of the Concept:** The student's description covers several core aspects of
gradient descent. They mention that it's an optimization process used to find the minimum (or maximum)
value of an objective function, which aligns with the concept. They also highlight the role of the gradient
in indicating the direction of steepest descent, which is crucial in gradient descent. The idea of iteratively
updating model parameters to minimize a cost function is also captured. However, there's no explicit mention
of the convergence aspect, where the process stops when a certain stopping criterion is met.

2. **Clarity and Simplicity of the Explanation:** The student's analogy of being in a valley and walking
downhill is quite clear and easy to understand. It simplifies the complex concept of gradient descent and
makes it accessible to someone with limited technical knowledge.The description effectively conveys the
iterative nature of the process and the importance of following the direction of steepest descent.

3. **Identify Gaps in Understanding and Areas for Improvement:** While the student's analogy is strong,
there are a few gaps and areas that could be improved:
   - **Initialization:** The concept of initializing the process at a random point isn't explicitly mentioned.
It's important to note that gradient descent usually starts from some initial point.
   - **Learning Rate:** The concept of a learning rate, which determines the step size in each iteration,
isn't addressed in the analogy.
   - **Convergence Criteria:** The explanation doesn't mention how the algorithm determines when to stop
iterating. Adding a brief note on convergence criteria could enhance the completeness of the description.
   - **Overfitting:** The student discusses the primary goal of achieving accuracy on training and test
datasets, but they don't touch upon the concept of overfitting, where a model might perform poorly on
new, unseen data.
   - **Types of Gradient Descent:** There's no mention of variations of gradient descent, such as batch,
 stochastic, or mini-batch gradient descent.
   
4. **Score on Explanation:** Considering the provided criteria and the evaluation of the student's
description, I would give the student's explanation a score of 7.5 out of 10. The analogy effectively
conveys the core concept of gradient descent in a simple manner, but some important technical aspects
are missing. With the addition of the missing elements mentioned above, the description could be even
more comprehensive.

Remember that explaining complex concepts accurately and understandably is a skill that can always be
refined. The student's analogy is a great starting point, and building upon it with the additional
technical details would further enhance the clarity and completeness of the explanation.
```

## Conclusion
Language models seem to be capable of performingthis task. It is noticeable that ChatGPT used more than the concept provided in its evaluation and used its pre-learned concept of Gradient Descent instead. This can be mitigated with some prompt engineering but I think the basic idea of using a Language Model to help assessment of understanding while using the Feynman Learning Technique
