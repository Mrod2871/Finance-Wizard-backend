const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: Number, required: true},
})

const Income = mongoose.model("Income", IncomeSchema)

module.exports = Income