<script setup lang="ts">
import { computed } from 'vue'
import { useTransactionStore } from '../stores/transaction'

const store = useTransactionStore()

const toLocaleCurrency = (amount: number) => {
  return amount.toLocaleString('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

const localeAmount = computed(() => {
  return toLocaleCurrency(store.totalAmount())
})

const localeIncome = computed(() => {
  return toLocaleCurrency(store.totalIncome())
})

const localeExpense = computed(() => {
  return toLocaleCurrency(store.totalExpense())
})
</script>

<template>
  <div>
    <h4>餘額</h4>
    <h1>{{ localeAmount }}</h1>
  </div>
  <div class="inc-exp-container">
    <div>
      <h4>收入</h4>
      <p class="money plus">+{{ localeIncome }}</p>
    </div>
    <div>
      <h4>支出</h4>
      <p class="money minus">+{{ localeExpense }}</p>
    </div>
  </div>
</template>

<style scope></style>
