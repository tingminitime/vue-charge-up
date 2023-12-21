import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTransactionStore } from './transaction'

describe('use transaction', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('add transaction', () => {
    it('should add a transaction', () => {
      const store = useTransactionStore()
      const transaction = store.addTransaction('Deductions', -10000)

      expect(transaction).toEqual(
        expect.objectContaining({
          title: 'Deductions',
          amount: -10000,
          type: 'minus',
        }),
      )

      expect(store.transactions[0]).toEqual(transaction)
    })

    it('should add a positive transaction', () => {
      const store = useTransactionStore()
      const transaction = store.addTransaction('Income', 20000)

      expect(transaction).toEqual({
        id: expect.any(String),
        title: 'Income',
        amount: 20000,
        type: 'plus',
      })

      expect(store.transactions[0]).toEqual(transaction)
    })
  })

  describe('remove transaction', () => {
    it('should remove a transaction', () => {
      const store = useTransactionStore()
      const transaction = store.addTransaction('Deductions', -10000)
      store.removeTransaction(transaction.id)

      expect(store.transactions.length).toBe(0)
    })

    it('should not remove a transaction if id is not found', () => {
      const store = useTransactionStore()
      const transaction = store.addTransaction('Deductions', -10000)
      store.removeTransaction('wrong id')

      expect(store.transactions).toEqual([transaction])
    })
  })

  describe('total amount', () => {
    it('should calculate total amount', () => {
      const store = useTransactionStore()
      store.addTransaction('Deductions', -10000)
      store.addTransaction('Income', 20000)

      expect(store.totalAmount()).toBe(10000)
    })
  })

  describe('total income', () => {
    it('should calculate total income', () => {
      const store = useTransactionStore()
      store.addTransaction('Deductions', -10000)
      store.addTransaction('Income', 20000)

      expect(store.totalIncome()).toBe(20000)
    })
  })

  describe('total expense', () => {
    it('should calculate total expense', () => {
      const store = useTransactionStore()
      store.addTransaction('Deductions', -10000)
      store.addTransaction('Income', 20000)

      expect(store.totalExpense()).toBe(-10000)
    })
  })
})
