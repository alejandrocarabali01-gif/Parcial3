<script setup>
import { useTransactionStore } from "../store/transactions";

const store = useTransactionStore();
</script>

<template>
  <div>
    <h3>Historial</h3>

    <ul>
      <li v-for="t in store.transactions" :key="t.id">
        {{ t.text }} — ${{ t.amount }}
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
</style>
