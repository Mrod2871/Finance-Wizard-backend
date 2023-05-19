const express = require('express')
const mongoose = require('mongoose')
const expenseRouter = express.Router()
const Expense = require('../models/expense')

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected to mongoose"))
    .on("error", (error) => console.log(error))


expenseRouter.get("/expense", async (req, res)=>{
    try{
        res.json(await Expense.find({}))
    } catch(error){
        res.status(400).json(error)
    }
})

// expense CREATE ROUTE
expenseRouter.post("/expense", async (req, res) => {
    try {
        // send all expense
        res.json(await Expense.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});
people
// expense DELETE ROUTE
expenseRouter.delete("/expense/:id", async (req, res) => {
    try {
        res.json(await Expense.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}
)

// expense UPDATE
expenseRouter.put("/expense/:id", async (req,res) => {
    try {
        // send all expense
        res.json(
            await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
        )
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
})

module.exports = expenseRouter