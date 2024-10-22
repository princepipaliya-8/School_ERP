import express from "express";
import auth from "../config/auth.js"
const principal = express.Router();

principal.get("/", auth, (req, res) => {
    res.send("Principal");
})

export default principal