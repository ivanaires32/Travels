import { Router } from "express";
import { getTravels } from "../Controllers/travels.controlles.js";

const router = Router()

router.get("/health", getTravels);

export default router