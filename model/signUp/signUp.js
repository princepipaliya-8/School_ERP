import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Master", "Principal", "Teacher"],
        required: true
    }
})

export default mongoose.model('signUp', signUpSchema)