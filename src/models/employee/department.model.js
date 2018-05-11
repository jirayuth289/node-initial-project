import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    desc: { type: String }
});

export default mongoose.model('Department', departmentSchema);