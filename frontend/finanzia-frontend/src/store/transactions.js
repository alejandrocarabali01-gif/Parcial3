import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transactions", {
  state: () => ({
    transactions: []
  }),

  getters: {
    total: (state) => state.transactions.reduce((sum, t) => sum + t.amount, 0)
  },

  actions: {
    addTransaction(t) {
      this.transactions.push({
        id: Date.now(),
        ...t,
      });
    }
  }
});
