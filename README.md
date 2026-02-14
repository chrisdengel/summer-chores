This is  a simple Node.js program that uses asynchronous functions and callbacks. Each task runs after the previous one finishes. 
If a task fails, the chain stops.The theme simulates yard work and the functions are tasks the program must complete before it "falls asleep". 
The sleep function is Math.random. I set the probability set to >= 0.2 over all 4 tasks equaling about a 60% chance of falling asleep before completing all the tasks...
-Chris

UPDATE 02/12/2026: Added a promisesVersion that uses Promises instead of callbacks thus eliminating "callback hell".

UPDATE 02/12/2026: Added a async/await Version that uses async/await.
