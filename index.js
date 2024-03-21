const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const { default: mongoose } = require("mongoose");
const TodoRoute = require("./router/todo")



const app = express();
const PORT = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })


mongoose.connect("mongodb://localhost:27017/Todo").
    then(()=>console.log("Mongoose Db is connect Successfull")).
    catch((err)=>console.log(err));


app.use("/",urlencodedParser,TodoRoute);
app.use(express.static(path.resolve('public')))
app.use(express.urlencoded({extended:false}))


app.set("view engine","ejs");


app.listen(PORT,()=>{
    console.log("Server is Started Port : ",PORT);
})