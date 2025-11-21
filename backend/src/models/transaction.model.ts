export interface Transaction {
  id: number;
  userId: number;
  type: "ingreso" | "gasto";
  amount: number;
  category: string;
  date: string;
}

export const transactions: Transaction[] = [];
