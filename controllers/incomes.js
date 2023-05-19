const express = require('express')
const mongoose = require('mongoose')
const incomeRouter = express.Router()
const Income = require('../models/income')

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected to mongoose"))
    .on("error", (error) => console.log(error))


incomeRouter.get("/income", async (req, res)=>{
    try{
        res.json(await Income.find({}))
    } catch(error){
        res.status(400).json(error)
    }
})

// income CREATE ROUTE
incomeRouter.post("/income", async (req, res) => {
    try {
        // send all income
        res.json(await Income.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// income DELETE ROUTE
incomeRouter.delete("/income/:id", async (req, res) => {
    try {
        res.json(await Income.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}
)

// income UPDATE
incomeRouter.put("/income/:id", async (req,res) => {
    try {
        // send all income
        res.json(
            await Income.findByIdAndUpdate(req.params.id, req.body, { new: true })
        )
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
})

modeule.exports = incomeRouter