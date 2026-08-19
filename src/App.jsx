import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm.jsx'
import { formatRupiah } from './utils.js'
import ExpenseList from './ExpenseList.jsx'
import CategoryFilter from './CategoryFilter.jsx'

function App() {
  const [expenses, setExpenses] = useState([])
  const [activeCategory, setActiveCategory] = useState("semua")
  const [loaded, setLoaded] = useState(false)

  // derived state - daftar yang tampil
  // kalau active Category "semua" seluruh expenses
  // selain itu -> expenses yang category-nya cocok
  const visible = activeCategory === "semua"
    ? expenses
    : expenses.filter((e) => e.category === activeCategory)

  useEffect(() => {
    const saved = localStorage.getItem("expenses")
    if (saved) {
      try {
        setExpenses(JSON.parse(saved))
      } catch (err) {
        localStorage.removeItem("expenses")
      }
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses, loaded])

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

      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* daftar pengeluaran - map dari expenses */}
      <ExpenseList expenses={visible} onDelete={handleDelete} />

    </div>
  )
}

export default App