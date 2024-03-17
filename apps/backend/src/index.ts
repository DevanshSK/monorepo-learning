import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})

app.listen(8000, () => {
    console.log(`Backend server running at url https://localhost:8000`);
    
})