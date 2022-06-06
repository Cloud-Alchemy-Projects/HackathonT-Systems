import express from "express";
import { getDemo } from "../controllers/demo.js";

const demoRouter = express.Router();

demoRouter.get('/', getDemo)

export default demoRouter;