import express from "express";
import {VALUE} from "@repo/common/config"

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: VALUE
    });
})

app.listen(8000, () => {
    console.log(`Backend server running at url https://localhost:8000`);
    
})