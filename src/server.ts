import express from "express";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
