import express from "express";
import run_python from "./python_runner"

const app = express();
const port = 8000; 

app.get( "/", ( req, res ) => res.send("welcome to python test, try url localhost:8000/python"));
app.get( "/python", ( req, res ) => run_python(req, res));

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});