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