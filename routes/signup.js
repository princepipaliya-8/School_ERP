import express from "express";
import { signUp } from "../controller/signUp.js";
const signup = express.Router();

signup.post("/", signUp)

export default signup