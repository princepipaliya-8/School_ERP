import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import db from "./config/db.js";
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is running on port http://localhost:${PORT}`);
    }
})