import express from 'express'
import cors from 'cors'
import mongoos from 'mongoose'
import bodyParser from 'body-parser'
import a from ".//routes/SignUP.js";

const app = express();
// require('dotenv/config')

// front end result will be return in json format
app.use(express.json())
app.use(cors())

mongoos 
 .connect('mongodb+srv://madanlal1:ls623266@cluster0.etiqy.mongodb.net/myDB?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,   
    })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


 app.get('/',(req,res)=>{
     console.log("run");
     res.send("done")
     
 })
app.use('/add' , a)
//Listening to servedr
app.listen(3001, () => console.log("server running"))