<script setup>
import { useTransactionStore } from "../store/transactions";

const store = useTransactionStore();

const total = store.total;
</script>

<template>
  <div style="padding: 20px;">
    <h1>Reportes</h1>

    <div class="card">
      <h3>Total de movimientos:</h3>
      <p>${{ total }}</p>
    </div>
  </div>
</template>
