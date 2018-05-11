import compression from "compression";
import express, { Router } from "express";
import bodyParser from "body-parser";
import cor from "cors";
import morgan from "morgan";
// import csurf from "csurf";
import cookieParser from 'cookie-parser';
import expressValidator from "express-validator";
import db from "../config/db";
import Middleware from "../middleware";
import routes from "../routes";

export default () => {
//   const csurfProtection = csurf({ cookie: true });
  const app = express();
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else {
    app.use(compression());
  }

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(expressValidator())
    .use(cor());

    app.use(Middleware.logsBody); //console.log(req.body)

    app.get("/", (req, res) => res.send("hello Spark"));
    app.use("/api", routes(Router()));

    app.use(Middleware.endpointNotfound); // If no route is matched by now, it must be a 404
    app.use(Middleware.handleError);

  return app;
};
