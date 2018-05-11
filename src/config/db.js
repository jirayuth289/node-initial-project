import mongoose from "mongoose";
import config from "./config";

const { dbconfig: { server, database, port } } = config;
mongoose.connect(`mongodb://${server}:${port}/${database}`).catch(err => {
    if (err.message.indexOf("ECONNREFUSED") !== -1) {
        console.error("Error: The server was not able to reach MongoDB. Maybe it's not running?");
        process.exit(1);
    } else {
        throw err;
    }
});