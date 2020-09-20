import {spawn} from 'child_process'

//const logOutput = (name) => (message) => console.log(`[${name}] ${message}`)
function run() {
   return new Promise((resolve, reject) => {
      let process = spawn('python',["./src/script.py", "-r", "select * from employees"] );
      let result = "";
      let resultError = "";

      process.stdout.on('data', function(data) {
            console.log("receiving data")
            result += data.toString();
       });

      process.stderr.on('data', (data) => {
            console.log("receiving error")
            resultError += data.toString();
       });

      process.stdout.on("close", function(){
            console.log("closing");
            if(resultError === "") {
                resolve (result);
            } else{
                console.error(`Python error, you can reproduce the error with`);
                reject(resultError);
            }
        })
   });
 }

 const run_python = async (req: any, res: any) => {
      try {
        let output = await run()
        console.log(output)
        res.send(output);
      } catch (err) {
        console.error('Error during script execution ', err);
        res.send(err)
      }
 };

 export default run_python




