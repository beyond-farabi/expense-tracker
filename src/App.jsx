import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm.jsx'

function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0 
    }).format(angka)
  }

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAdd(expense) {
    // tambahkan expense ke array
    setExpenses([...expenses, expense])
  }

  // hitung total dari expenses
  const total =expenses.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div>
      <h1>Expense Tracker</h1>

      <ExpenseForm onAdd={handleAdd} />

      {/* tampilkan total */}
      <p>{formatRupiah(total)}</p>

      {/* daftar pengeluaran - map dari expenses */}
      {expenses.map((e) => (
        <div key={e.id}>
          <span>{e.description}</span>
          <span>{e.category}</span>
          <span>{formatRupiah(e.amount)}</span>
        </div>
      ))}

    </div>
  )
}

export default App