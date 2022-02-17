const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Routes

app.use("/profile", require("./routes/profileRouter.js"))

// Error Handler

app.use((err, req, res) => {
    return res.send({errMsg: err.message})
})

// Server Listen
app.listen(9000, () => {
    console.log("The server is running, Port 9000")
})