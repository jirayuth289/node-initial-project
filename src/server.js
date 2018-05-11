import chalk from "chalk";
import dotenv from "dotenv";
import http from "http";

import config from "./config/config";
import express from './config/express';

process.env.NODE_ENV = process.env.NODE_ENV || "development";
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = express();

const server = http.createServer(app);
server.listen(process.env.PORT || config.port, () => {
  console.log(chalk.black.bgCyanBright(`Server Started on port ${server.address().port}`));
});

