require('dotenv').config()

const {PORT = 4000, MONGODB_URL } = process.env

const express = require('express')

const app = express()

const mongoose = require("mongoose")

const cors = require("cors")

const morgan = require("morgan")

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected to mongoose"))
    .on("error", (error) => console.log(error))

const IncomeSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Income = mongoose.model("Income", IncomeSchema)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.send("Hello Finance")
})

app.get("/income", async (req, res)=>{
    try{
        res.json(await Income.find({}))
    } catch(error){
        res.status(400).json(error)
    }
})

// income CREATE ROUTE
app.post("/income", async (req, res) => {
    try {
        // send all income
        res.json(await Income.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// income DELETE ROUTE
app.delete("/income/:id", async (req, res) => {
    try {
        res.json(await Income.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}
)

// income UPDATE
app.put("/income/:id", async (req,res) => {
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

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))