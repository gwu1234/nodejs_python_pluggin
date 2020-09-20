## How to plug a python script in Node.js server  

it is a demo how to integrate an AI model (python script) in a Node.js server 

### modules and data structures

- import {spawn} from 'child_process', to spawn a process to run python 
- spawn('python',["./src/script.py", "-r", "select * from employees"] ), executing python
- process.stdout.on("close", function(){resolve (result)}, reading result from python 

### how to start 

- Run `npm install` in the root directory 
- Run `npm run start` to start node.js server 
- run 'localhost:8000/python' at browser to trigger python script 