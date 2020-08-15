import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import bodyParser from "body-parser";

import Router from "./config/Router";

createConnection().then(() => {

    const app = express();
    app.use(bodyParser.json());

    app.use(Router);

    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
