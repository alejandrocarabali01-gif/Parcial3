<script setup>
import { ref } from "vue";
import { useTransactionStore } from "../store/transactions";

const store = useTransactionStore();

const text = ref("");
const amount = ref("");

const add = () => {
  if (text.value !== "" && amount.value !== "") {
    store.addTransaction({
      text: text.value,
      amount: Number(amount.value),
    });

    text.value = "";
    amount.value = "";
  } else {
    alert("Complete los campos");
  }
};
</script>

<template>
  <div>
    <h3>Agregar Transacción</h3>
    <input v-model="text" placeholder="Descripción" />
    <input v-model="amount" type="number" placeholder="Monto" />
    <button @click="add">Agregar</button>
  </div>
</template>
