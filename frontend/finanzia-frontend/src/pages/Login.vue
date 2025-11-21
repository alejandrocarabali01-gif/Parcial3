<template>
  <div class="login-box">
    <h2>Iniciar Sesión</h2>

    <form @submit.prevent="login">
      <input v-model="email" placeholder="Correo" type="email" required />
      <input v-model="password" placeholder="Contraseña" type="password" required />

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

function login() {
  router.push("/dashboard");
}
</script>

<style scoped>
.login-box {
  max-width: 360px;
  margin: 90px auto;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.login-box input {
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
}
button {
  width: 100%;
  padding: 14px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
}
button:hover {
  background: #1e40af;
}
</style>
