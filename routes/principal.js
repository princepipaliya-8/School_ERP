import express from "express";
import veryfy from "../config/auth.js"
import { principalGet } from '../controller/principal.js'
const principal = express.Router();

principal.get('/', veryfy(["Master"]), principalGet)

export default principal