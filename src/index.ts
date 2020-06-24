import express from "express";
import * as bodyParser from "body-parser";
import * as path from 'path';

import CustomerApi from "./route/CustomerAPI";

const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', CustomerApi);

router.get(
    "/",
    async (req: express.Request, res: express.Response): Promise<void> => {
        res.send("hello world");
    }
);

app.use("/", router);

app.listen(port, () => {
    const yellow  = '\u001b[33m';
    const reset   = '\u001b[0m';
    console.log(yellow + `running at http://127.0.0.1:${port}`+reset)
});

export default app;
