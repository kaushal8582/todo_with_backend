const express = require("express")
const Todo = require("../models/todo")
const route = express.Router();


// sara data show karta hai display pe.

async function showData(res) {
    
    const allData = await Todo.find({});
    return res.render("home", {
        allData: allData,
    });
}

route.get("/", async (req, res) => {
    await showData(res)
})

// add karta hai data in database 
route.post("/", async (req, res) => {
    const { work } = req.body;

    await Todo.create({
        work,
    })
    return res.redirect("/");

})

// ye delete karta hai.
route.get("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await Todo.findByIdAndDelete(id).
        then(() => console.log("delete successfull")).
        catch((err) => console.log(err));

    await showData(res);
})


// ye function read aur not read check karta hai.

route.get("/read/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Todo.findById(id);
    const flag = await data.flag;
    if (flag != true) {
        await Todo.findByIdAndUpdate(id, { flag: true });
    } else {
        await Todo.findByIdAndUpdate(id, { flag: false });
    }
    return res.redirect("/");
})

// update features add yaha pe kar dijiyega 

// kaise data update karenge nahi pata






module.exports = route;