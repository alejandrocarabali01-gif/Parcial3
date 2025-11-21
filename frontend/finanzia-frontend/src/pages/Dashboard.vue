<script setup>
import TransactionForm from "../components/TransactionForm.vue";
import TransactionList from "../components/TransactionList.vue";
import Recommendations from "../components/Recommendations.vue";
</script>

<template>
  <div style="padding: 20px;">
    <h1>Panel Principal</h1>

    <div class="card">
      <TransactionForm />
    </div>

    <div class="card">
      <TransactionList />
    </div>

    <div class="card">
      <Recommendations />
    </div>
  </div>
</template>
