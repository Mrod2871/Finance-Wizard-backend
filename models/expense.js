const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    name: {String, required: true},
    number: {Number, required: true},
})

const Expense = mongoose.model("Expense", ExpenseSchema)

module.exports = Expense