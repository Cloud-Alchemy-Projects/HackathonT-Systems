import express from "express";
import { getWork } from "../controllers/work.js";

const homeWork = express.Router();

homeWork.get('/', getWork)

export default homeWork;