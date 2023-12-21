import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Transaction {
  id: string
  title: string
  amount: number
  type: 'plus' | 'minus'
}

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = reactive<Transaction[]>([])

  // 實現新增 transaction 的方法
  function addTransaction(title: string, amount: number) {
    const id = crypto.randomUUID()
    const transaction: Transaction = {
      id,
      title,
      amount,
      type: amount > 0 ? 'plus' : 'minus',
    }
    transactions.push(transaction)

    return transaction
  }

  // 實現刪除 transaction 的方法
  function removeTransaction(id: string) {
    const index = transactions.findIndex(t => t.id === id)
    if (index !== -1) {
      transactions.splice(index, 1)
    }
  }

  // 實現計算總餘額的方法
  function totalAmount() {
    return transactions.reduce((total, t) => total + t.amount, 0)
  }

  // 實現計算總收入的方法
  function totalIncome() {
    return transactions.reduce((total, t) => {
      if (t.type === 'plus') {
        return total + t.amount
      }
      return total
    }, 0)
  }

  // 實現計算總支出的方法
  function totalExpense() {
    return transactions.reduce((total, t) => {
      if (t.type === 'minus') {
        return total + t.amount
      }
      return total
    }, 0)
  }

  return {
    transactions,
    addTransaction,
    removeTransaction,
    totalAmount,
    totalIncome,
    totalExpense,
  }
})
