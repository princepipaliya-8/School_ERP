import express from "express";
import { signin } from "../controller/signIn.js";
const signIn = express.Router();

signIn.post("/", signin)

export default signIn