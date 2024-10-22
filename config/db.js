import mongoose from "mongoose";

const db = mongoose.connect("mongodb+srv://princepipaliya1781980:RikHydmVbtel1Cr7@schoolcluster.kjezn.mongodb.net/schoolManagment")
    .then(() => console.log("database connected"))
    .catch((err) => console.log("err", err))

export default db