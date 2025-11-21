import { Request, Response } from "express";
import { transactions } from "../models/transaction.model";

let counter = 1;

export const getTransactions = (req: Request, res: Response) => {
  res.json(transactions);
};

export const addTransaction = (req: Request, res: Response) => {
  const { userId, type, amount, category } = req.body;

  const newTransaction = {
    id: counter++,
    userId,
    type,
    amount,
    category,
    date: new Date().toISOString()
  };

  transactions.push(newTransaction);

  res.json({
    message: "Transacción agregada",
    transaction: newTransaction
  });
};
