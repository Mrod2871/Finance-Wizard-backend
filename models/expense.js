const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: Number, required: true},
})

const Expense = mongoose.model("Expense", ExpenseSchema)

module.exports = Expense