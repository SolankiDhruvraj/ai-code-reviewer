import express from "express";
const router = express.Router()
import getReview from '../controllers/ai.contollers.js'

router.post("/get-review", getReview)

export default router