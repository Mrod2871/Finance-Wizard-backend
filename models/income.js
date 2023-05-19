const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    name: {String, required: true},
    number: {Number, required: true},
})

const Income = mongoose.model("Income", IncomeSchema)

module.exports = Income