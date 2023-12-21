<script setup lang="ts">
import { ref } from 'vue'
import { useTransactionStore } from '../stores/transaction'

const store = useTransactionStore()
const title = ref<string>('')
const amount = ref<number>(0)

function addTransaction() {
  store.addTransaction(title.value, amount.value)
  title.value = ''
  amount.value = 0
}
</script>

<template>
  <div>
    <h3>新增紀錄</h3>
    <div class="form-control">
      <label for="text">Text</label>
      <input
        v-model.number="title"
        type="text"
        placeholder="enter text..."
      />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />
        (negative - expense, positive - income)</label
      >
      <input
        v-model.number="amount"
        type="text"
        placeholder="enter amount..."
        @keyup.enter="addTransaction"
      />
    </div>
    <button
      class="btn"
      @click="addTransaction"
    >
      添加记录
    </button>
  </div>
</template>

<style scope></style>
