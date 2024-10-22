import token from "jsonwebtoken"

const auth = async (req, res, next) => {
    const token = req.header("Authorization")
    try {
        const data = token.split(" ")[1]
        if (data) {
            next();
        } else {
            res.status(401).send({ error: "Please enter valid token" })
        }
    } catch (e) {
        res.status(401).send({ error: "Please authenticate" })
    }
}
export default auth