import jwt from "jsonwebtoken";

const verify = (roles) => {
    return (req, res, next) => {

        try {
            const token = req.header("Authorization");

            if (!token) {
                return res.status(401).send({ error: "No token provided" });
            }
            const tokenData = token.split(" ")[1];
            console.log(tokenData);

            const decoded = jwt.verify(tokenData, "iAmMAster");
            console.log("decoded", decoded);

            if (roles.includes(decoded.role)) {
                res.status(200).send({ message: "Authorized" });
                next();
            } else {
                res.status(401).send({ error: "Unauthorized" });
            }


        } catch (e) {
            res.status(401).send({ error: "Invalidd token" });
        }
    };
};

export default verify;
