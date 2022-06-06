import express from "express";
import { getAbout } from "../controllers/about.js";

const aboutRouter = express.Router();

aboutRouter.get('/', getAbout)

export default aboutRouter;