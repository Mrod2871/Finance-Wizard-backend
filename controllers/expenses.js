const express = require('express')

const expenseRouter = express.Router()
const Expense = require('../models/expense')


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