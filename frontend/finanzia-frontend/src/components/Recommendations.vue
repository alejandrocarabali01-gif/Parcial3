<script setup>
import { computed } from "vue";
import { useTransactionStore } from "../store/transactions";

const store = useTransactionStore();

const recommendation = computed(() => {
  const total = store.total;

  if (total < 0) return "Estás gastando más de lo que ganas.";
  if (total < 200) return "Puedes ahorrar al menos $20 este mes.";
  if (total < 500) return "Vas bien, mantén tu disciplina financiera.";
  return "Excelente manejo, considera invertir.";
});
</script>

<template>
  <div>
    <h3>Recomendación IA</h3>
    <p>{{ recommendation }}</p>
  </div>
</template>
