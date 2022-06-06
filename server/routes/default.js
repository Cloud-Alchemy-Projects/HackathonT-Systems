import express from "express";
import { getDefault } from "../controllers/default.js";

const defaultRouter = express.Router();

defaultRouter.get('/', getDefault)

export default defaultRouter;