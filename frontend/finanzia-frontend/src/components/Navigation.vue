<template>
  <nav class="nav">
    <h2>FinanzIA</h2>

    <ul>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/reports">Reportes</router-link></li>
      <li><router-link to="/login">Salir</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background: #111827;
  color: white;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav ul {
  display: flex;
  gap: 20px;
}

.nav a {
  color: #93c5fd;
  text-decoration: none;
  font-weight: 500;
}

.nav a:hover {
  color: white;
}
</style>
