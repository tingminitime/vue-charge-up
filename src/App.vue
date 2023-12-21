<script setup lang="ts">
import Balance from './components/Balance.vue'
import History from './components/History.vue'
import AddTransaction from './components/AddTransaction.vue'
</script>

<template>
  <div>
    <h2>記帳</h2>

    <div class="container">
      <Balance />
      <History />
      <AddTransaction />
    </div>
  </div>
</template>
