import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm.jsx'
import { formatRupiah } from './utils.js'
import ExpenseList from './ExpenseList.jsx'

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAdd(expense) {
    // tambahkan expense ke array
    setExpenses([...expenses, expense])
  }

  // hitung total dari expenses
  const total =expenses.reduce((sum, e) => sum + e.amount, 0)

  function handleDelete(id) {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  return (
    <div>
      <h1>Expense Tracker</h1>

      <ExpenseForm onAdd={handleAdd} />

      {/* tampilkan total */}
      <p>{formatRupiah(total)}</p>

      {/* daftar pengeluaran - map dari expenses */}
      <ExpenseList expenses={expenses} onDelete={handleDelete} />

    </div>
  )
}

export default App