import 'dotenv/config'
import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import productRouter from './routes/product.router'
import * as cors from 'cors';

// create express app
const app = express();

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(bodyParser.json());

// register express routes from defined application routes
app.use('/api',productRouter);

export default app;
