import ExpenseItem from "./ExpenseItem.jsx"

function ExpenseList({ expenses, onDelete }) {
    // kalau expenses kosong, tampilkan pesan
    // bisa pakai early return/ternary
    if (expenses.length === 0) {
        return <p className="empty">Belum ada pengeluaran.</p>
    }

    return (
        <div className="expense-list">
            {/* map expenses jadi ExpenseItem, kirim expense dan onDelete */}
            { expenses.map((e) => (
                <ExpenseItem key={e.id} expense={e} onDelete={() => onDelete(e.id)} />
            ))}
            
        </div>
    )
}

export default ExpenseList