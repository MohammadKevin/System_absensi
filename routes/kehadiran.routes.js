import express from "express";
import {
    getAttendanceSummary,
    analysisAttendance
} from "../controller/kehadiran.controller.js";

const router = express.Router();

router.get("/summary/:userId", getAttendanceSummary)
router.get("/analysis", analysisAttendance);

export default router;