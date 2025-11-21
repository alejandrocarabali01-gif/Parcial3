import { Router } from "express";
import { addTransaction, getTransactions } from "../controllers/transaction.controller";

const router = Router();

router.get("/", getTransactions);
router.post("/", addTransaction);

export default router;
