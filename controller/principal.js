import principalModel from "../model/signIn/signIn.js";
import bcrypt from "bcrypt";
import token from "jsonwebtoken";

export const principalGet = async (req, res) => {
    res.status(202).json({
        "msg": "Principal"
    })
}


export default principalGet