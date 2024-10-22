import signUpModel from "../model/signUp/signUp.js";
import bcrypt from "bcrypt"
import token from "jsonwebtoken"

export const signin = async (req, res) => {
    const user = await signUpModel.find({ email: req.body.email });
    if (user.length > 0) {

        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (result) {

                let tokan = token.sign({ userName: user.name, role: user.role }, "iAmMAster", {
                    expiresIn: '1h',
                });


                res.json({
                    message: "Login Successful",
                    token: tokan
                });



            } else {
                res.json({
                    message: "Invalid Password"
                });
            }
        });
    } else {
        res.json({
            message: "Invalid Email"
        });
    }
}